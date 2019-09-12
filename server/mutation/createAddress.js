const axios = require('axios');
const uuid = require('uuid');

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
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ? axios
            .post(`${dbHost}/addresses`, {
                id: uuid.v4(),
                streetName: args.streetName,
                streetNumber: args.streetNumber,
                zipCode: args.zipCode,
                city: args.city,
                country: args.country,
            })
            .then(response => {
                return response.data;
            })
            : {};
    },
};
