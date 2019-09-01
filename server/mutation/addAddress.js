const axios = require('axios');
const { GraphQLString, GraphQLNonNull } = require('graphql');

const AddressObjectType = require('./../object-types/address');
const { dbHost } = require('./../settings');

module.exports = {
    type: AddressObjectType,
    args: {
        streetName: { type: GraphQLNonNull(GraphQLString) },
        streetNumber: { type: GraphQLNonNull(GraphQLString) },
        zipCode: { type: GraphQLNonNull(GraphQLString) },
        city: { type: GraphQLNonNull(GraphQLString) },
        country: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve(parentValue, args) {
        return axios
            .post(`${dbHost}/addresses`, {
                streetName: args.streetName,
                streetNumber: args.streetNumber,
                zipCode: args.zipCode,
                city: args.city,
                country: args.country,
            })
            .then(response => {
                return response.data;
            });
    },
};
