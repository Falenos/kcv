const { GraphQLObjectType } = require('graphql');

const addAddress = require('./addAddress');
const deleteAddress = require('./deleteAddress');
const editAddress = require('./editAddress');

module.exports = new GraphQLObjectType({
   name: 'Mutation',
   fields: {
       addAddress,
       deleteAddress,
       editAddress,
   },
});
