
const axios = require('axios');
const { GraphQLString, GraphQLNonNull } = require('graphql');

const AddressObjectType = require('./../object-types/address');
const { dbHost } = require('./../settings');

module.exports = {
    type: AddressObjectType,
    args: {
        id: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve(parentValue, args) {
        return axios
            .delete(`${dbHost}/addresses/${args.id}`)
            .then(response => {
                return response.data;
            });
    },
};