const axios = require('axios');
const { GraphQLString, GraphQLNonNull } = require('graphql');

const AddressObjectType = require('./../object-types/address');
const { dbHost } = require('./../settings');

module.exports = {
    type: AddressObjectType,
    args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        streetName: { type: GraphQLString },
        streetNumber: { type: GraphQLString },
        zipCode: { type: GraphQLString },
        city: { type: GraphQLString },
        country: { type: GraphQLString },
    },
    resolve(parentValue, args) {
        return axios
            .patch(`${dbHost}/addresses/${args.id}`, args)
            .then(response => {
                return response.data;
            });
    },
};
