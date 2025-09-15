import mongoose from 'mongoose';
import crypto from 'crypto';

const expenseSchema = mongoose.Schema(
    {
        account: {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account',
            required: true
        },
        base64: { type: String, default: crypto.randomBytes(16).toString('base64url') },
        amount: { type: Number, required: true },
        category: { type: String, required: true },
        date: { type: Date, required: true, default: Date.now },
        description: { type: String },
    },
    {
        collection: 'expenses',
        strict: 'throw',
        timestamps: true
    }
);

const Expense = mongoose.model('Expense', expenseSchema);

export { Expense };

