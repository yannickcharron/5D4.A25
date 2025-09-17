import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import HttpErrors from 'http-errors';
import argon from 'argon2';
import parseDuration from 'parse-duration';

import { Account } from '../models/account.model.js';

class AccountRepository {
    async login(credential, password) {
        const account = await this.retrieveByCredentials(credential);
        if (!account) {
            //Email non présent en base de données
            throw HttpErrors.Unauthorized();
        }

        if (!(await this.validatePassword(password, account))) {
            throw HttpErrors.Unauthorized();
        }

        return account;
    }

    async validatePassword(password, account) {
        return await argon.verify(account.passwordHash, password);
    }

    async create(account) {
        try {
            account.passwordHash = await argon.hash(account.password);
            delete account.password;
            return Account.create(account);
        } catch (err) {
            throw err;
        }
    }

    retrieveByUUID(uuid) {
        const retrieveQuery = Account.findOne({ uuid: uuid });
        return retrieveQuery;
    }

    retrieveById(idAccount) {
        return Account.findById(idAccount);
    }

    retrieveByEmail(email) {
        return Account.findOne({ email: email });
    }

    retrieveByCredentials(credential) {
        return Account.findOne({ $or: [{ email: credential }, { username: credential }] });
    }

    generateJWT(uuid) {
        const access = jwt.sign({ uuid: uuid }, 
            process.env.JWT_TOKEN_SECRET, 
            {
                expiresIn: process.env.JWT_TOKEN_LIFE,
                issuer: process.env.BASE_URL
            }
        );

        return { access };
    }

    async validateRefreshToken(email, headerBase64) {
        //TODO:
    }

    transform(account) {
        account.href = `${process.env.BASE_URL}/accounts/${account.uuid}`;

        delete account._id;
        delete account.__v;
        delete account.uuid;
        delete account.password;
        delete account.passwordHash;

        return account;
    }
}

export default new AccountRepository();
