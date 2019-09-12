const { GraphQLObjectType } = require('graphql');

const createCredentials = require('./createCredentials');
const login = require('./login');

const createAddress = require('./createAddress');
const createCV = require('./createCV');

const deleteAddress = require('./deleteAddress');
const deleteCV = require('./deleteCV');

const updateAddress = require('./updateAddress');
const updateCV = require('./updateCV');

module.exports = new GraphQLObjectType({
   name: 'Mutation',
   fields: {
       login,
       createCredentials,
       createAddress,
       createCV,
       deleteAddress,
       deleteCV,
       updateAddress,
       updateCV,
   },
});
