import HttpErrors from 'http-errors';
import tokenRepository from '../repositories/token.repository.js';

export default class TokenController {
    async isRevoked(token) {
        //TODO:
    }

    async invalidate(token) {
        try {
           const revokedToken = await tokenRepository.invalidate(token);
           if(!revokedToken) {
            throw HttpErrors.Unauthorized();
           }
        } catch (err) {
            throw err;
        }
    }
}
