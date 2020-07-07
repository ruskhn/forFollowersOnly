const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const routes = require('./account/routes');
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'onlyForFollowers',
            description: 'onlyForFollowers API docs',
            contact: {
                name: 'RusKhn'
            },
            servers: ["https://localhost:8000"]
        },
        basePath: '/api',
        securityDefinitions: {
            tokenauth: {
                type: 'apiKey',
                name: 'x-access-token',
                in: 'header'
            },
            basicauth: {
                type: 'basic'
            }
        }
    },
    apis: ['./routes/index.js', './routes/*.js']
};




const specs = swaggerJsDoc(swaggerOptions);
module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    app.use('/api',routes);
    app.use(function (err, req, res, next) {
        if(err.isBoom){
            return res.status(err.output.statusCode).json(err.output.payload);
        }
    })
}