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
        //TODO:
    }


    retrieveByBase64(base64) {
        const retrieveQuery = Account.findOne({ base64: base64 });
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
        account.href = `${process.env.BASE_URL}/accounts/${account.base64}`;

        delete account._id;
        delete account.__v;
        delete account.base64;
        delete account.password;
        delete account.passwordHash;

        return account;
    }
}

export default new AccountRepository();
