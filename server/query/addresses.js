const axios = require('axios');
const { GraphQLList } = require('graphql');

const AddressObjectType = require('./../object-types/address');

const { dbHost } = require('./../settings');

module.exports = {
    type: GraphQLList(AddressObjectType),
    resolve(parentValue, args) {
        return axios.get(`${dbHost}/addresses`).then(response => response.data);
    }
};
