import express from 'express';
import expressRateLimit from 'express-rate-limit';
import expressSlowDown from 'express-slow-down';

const router = express.Router();

const limiter = expressRateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: 'Too many requests from this IP please try again later aligator'
});

const speedLimiter = expressSlowDown({
    windowMs: 15 * 60 * 1000,
    delayAfter: 5,
    delayMs: 500
});

router.get('/rate-limit', limiter, rateLimit);
router.get('/speed-limit', speedLimiter, speedLimit);

function rateLimit(req, res, next) {
    res.status(200).json(req.rateLimit);
}

function speedLimit(req, res, next) {
    res.status(200).json(req.slowDown);
}

export default router;
