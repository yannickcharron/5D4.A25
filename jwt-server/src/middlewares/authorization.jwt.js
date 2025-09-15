import { expressjwt } from 'express-jwt';

import tokenRepository from '../repositories/token.repository.js';

const guardAuthorizationJWT = {};

const guardRefreshTokenJWT = {}

const revokeAuthorization = {};

export { guardAuthorizationJWT, guardRefreshTokenJWT, revokeAuthorization };
