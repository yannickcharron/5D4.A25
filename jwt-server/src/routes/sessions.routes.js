import express from 'express';
import HttpErrors from 'http-errors';

import accountRepository from '../repositories/account.repository.js';

import TokenController from '../controllers/token.controller.js';
const tokenController = new TokenController()

import { guardAuthorizationJWT, revokeAuthorization } from '../middlewares/authorization.jwt.js';

const router = express.Router();

router.post('/', login);
router.delete('/', logout);

async function login(req, res, next) {
    //TODO:
}

async function logout(req, res, next) {
    try {
       //TODO:
    } catch(err) {
        return next(err);
    } 
}

export default router;