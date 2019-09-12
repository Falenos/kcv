const axios = require('axios');
const {
    GraphQLID,
    // GraphQLInt,
    GraphQLNonNull } = require('graphql');
// const { GraphQLDate } = require('graphql-iso-date');

const CVObjectType = require('../object-types/cv');
const { dbHost } = require('../settings');
// const CurrencyEnumType = require('../object-types/currencty');

module.exports = {
    type: CVObjectType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ?
            axios.patch(`${dbHost}/cvEntries/${args.id}`, args)
            .then(response => {
                return response.data;
            })
            : {};
    },
};
