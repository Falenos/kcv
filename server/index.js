const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const Authentication = require('./services/Authentication');
const server = express();

const isProductionEnvironment = typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV === 'prod';

server.use(cookieParser());
server.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const expressGraphQLOptions = {
    schema,
    graphiql: !isProductionEnvironment,
};

server.use('/graphql', (req, res, next) => {
    const Promises = [];

    const isSetUpPromise = Authentication.isSetUp().then(isSetUp => {
        req.isSetUp = isSetUp;
    });

    Promises.push(isSetUpPromise);

    req.isAuthenticated = false;

    if (typeof req.cookies.token !== 'undefined') {
        const isAuthenticatedPromise = Authentication.isAuthenticated(req.cookies.token).then(isAuthenticated => {
            req.isAuthenticated = isAuthenticated;
        });

        Promises.push(isAuthenticatedPromise);
    }

    Promise.all(Promises).then(() => {
        next();
    });
}, expressGraphQL(expressGraphQLOptions));

if (isProductionEnvironment) {
    server.use(express.static(path.join(__dirname, '../client/build/')));
    server.get('*', (req,res) => res.sendFile(path.join(__dirname+'/../client/build/index.html')))
        .listen(80,() => console.log('Server on port 80'));
} else {
    server.listen(4000,() => console.log('Server on port 80'));
}
