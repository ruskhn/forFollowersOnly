require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const handdleError = require('./middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// api routes
app.use('/accounts', require('./accounts/accounts.controller'));

// swagger docs route
app.use('/api-docs', require('./helpers/swagger'));

// global error handler
app.use(handdleError);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

