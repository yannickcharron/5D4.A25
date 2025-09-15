import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import HttpErrors from 'http-errors';
import argon from 'argon2';
import parseDuration from 'parse-duration';

import { Account } from '../models/account.model.js';

class AccountRepository {

    async login(email, password) {
        //TODO:
    }

    async validatePassword(password, account) {
        //TODO:
    }

    async create(account) {
        try {
            account.passwordHash = await argon.hash(account.password);
            delete account.password;
            return Account.create(account);
        } catch(err) {
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

    generateJWT(email, base64) {
        //TODO:
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
