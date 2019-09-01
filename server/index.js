const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const server = express();

server.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,
}));

server.listen('4000', () => {
    console.log('Server is running on port 4000');
});
