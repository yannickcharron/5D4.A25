import express from 'express';
import HttpErrors from 'http-errors';

import { guardRefreshTokenJWT } from '../middlewares/authorization.jwt.js';

import accountRepository from '../repositories/account.repository.js';
import clientRepository from '../repositories/client.repository.js';

import TokenController from '../controllers/token.controller.js';
const tokenController = new TokenController()

const router = express.Router();

router.post('/', refresh);

async function refresh(req, res, next) {

    try {
        //TODO:
    } catch (err) {
        return next(err);
    }
}

router.delete('/', (req, res, next) => {
    try {
        //TODO:
    } catch (err) {
        return next(err);
    }
});

export default router;
