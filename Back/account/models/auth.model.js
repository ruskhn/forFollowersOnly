const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;