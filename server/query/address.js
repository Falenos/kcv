const axios = require('axios');
const { GraphQLString } = require('graphql');

const AddressObjectType = require('./../object-types/address');
const { dbHost } = require('./../settings');

module.exports = {
    type: AddressObjectType,
    args: {
        id: { type: GraphQLString }
    },
    resolve(parentValue, args) {
        return axios
            .get(`${dbHost}/addresses/${args.id}`)
            .then(response => {
                return response.data;
            })
            .catch(response => {
                return null;
            });
    },
};
