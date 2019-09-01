const { GraphQLObjectType } = require('graphql');

const address = require('./address');
const addresses = require('./addresses');

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        address,
        addresses,
    },
});
