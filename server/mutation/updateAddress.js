const axios = require('axios');
const { GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');

const AddressObjectType = require('./../object-types/address');
const { dbHost } = require('./../settings');

module.exports = {
    type: AddressObjectType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        streetName: { type: GraphQLString },
        streetNumber: { type: GraphQLString },
        zipCode: { type: GraphQLString },
        city: { type: GraphQLString },
        country: { type: GraphQLString },
    },
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ?
            axios.patch(`${dbHost}/addresses/${args.id}`, args)
            .then(response => {
                return response.data;
            })
            : {};
    },
};
