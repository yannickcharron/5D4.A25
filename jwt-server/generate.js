import database from './src/core/database.js';
import expenseRepository from './src/repositories/expense.repository.js';


async function generate(req, res, next) {
    await database();
    try {
        for (let i = 0; i < 250; i++) {
            expenseRepository.generate();
        }
    } catch (err) {
        console.log(err);
    }
}

await generate().then(() => {
    console.log('Génération terminée');
});

