const config = require('../config');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.DATABASE_CLOUD || config.connectionString, connectionOptions).then(() => { console.log('Connected to DB: ', config.connectionString)});

mongoose.Promise = global.Promise;

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}

module.exports = {
    Account: require('../accounts/account.model'),
    RefreshToken: require('../accounts/refresh-token.model'),
    isValidId
};

