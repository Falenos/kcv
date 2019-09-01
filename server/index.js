const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const server = express();

server.use(cors());

server.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,
}));

server.listen('4000', () => {
    console.log('Server is running on port 4000');
});
