const { GraphQLObjectType } = require('graphql');

const getStatus = require('./getStatus');
const getCV = require('./getCV');
const getCVs = require('./getCVs');
const getCVEntry = require('./getCVEntry');
const getCVEntries = require('./getCVEntries');
const getAddress = require('./getAddress');
const getAddresses = require('./getAddresses');

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getStatus,
        getCV,
        getCVs,
        getCVEntry,
        getCVEntries,
        getAddress,
        getAddresses,
    },
});
