const {
    GraphQLList,
} = require('graphql');

const axios = require('axios');

const AddressObjectType = require('./../object-types/address');

module.exports = {
    type: GraphQLList(AddressObjectType),
    resolve(parentValue, args) {
        return axios.get('http://localhost:3000/addresses').then(response => response.data);
    }
};
