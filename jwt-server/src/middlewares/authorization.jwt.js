import { expressjwt } from 'express-jwt';

import tokenRepository from '../repositories/token.repository.js';

const guardAuthorizationJWT = expressjwt({
    secret: process.env.JWT_TOKEN_SECRET,
    issuer: process.env.BASE_URL,
    algorithms: ['HS256']
});

const guardRefreshTokenJWT = expressjwt({
    secret: process.env.JWT_REFRESH_SECRET,
    issuer: process.env.BASE_URL,
    algorithms: ['HS256'],
    requestProperty: 'refresh',
    getToken: (req) => {
        return req.body.refreshToken
    }
})

const revokeAuthorization = {};

export { guardAuthorizationJWT, guardRefreshTokenJWT, revokeAuthorization };
