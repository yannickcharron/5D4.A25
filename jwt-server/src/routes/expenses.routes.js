import express from 'express';
import expenseRepository from '../repositories/expense.repository.js';


import { guardAuthorizationJWT } from '../middlewares/authorization.jwt.js';
import accountRepository from '../repositories/account.repository.js';

const router = express.Router();

router.post('/', create);
router.get('/', retrieveAll);

async function create(req, res, next) {
    try {
        let account = await accountRepository.retrieveByEmail(req.auth.email);
        let newExpense = await expenseRepository.create(req.body, account._id);
        res.header('Location', `${process.env.BASE_URL}/expenses/${newExpense.base64}`);

        if (req.query._body === 'false') {
            return res.status(204).end();
        }

        newExpense = newExpense.toObject({ getters: false, virtuals: false });
        newExpense = expenseRepository.transform(newExpense);
        res.status(201).json(newExpense);
    } catch (err) {
        return next(err);
    }
}

//Cette ne devrait pas exister, possible de voir l'ensemble des expenses de tous les utilisateurs
async function retrieveAll(req, res, next) {
    try {
        let expenses = await expenseRepository.retrieveAll();
        expenses = expenses.map(e => {
            e = e.toObject({ getters: false, virtuals: false });
            e = expenseRepository.transform(e, req.options);
            return e;
        });

        res.status(200).json(expenses);
    } catch (err) {
        console.log(err);
        return next(err);
    }
}

export default router;
