import mongoose from 'mongoose';

const accountSchema = mongoose.Schema(
    {

    },
    {
        collection: 'accounts',
        strict: 'throw',
        timestamps: true
    }
);

const Account = mongoose.model('Account', accountSchema);

export { Account };
