const axios = require('axios');
const uuid = require('uuid');

const { GraphQLID, GraphQLInt, GraphQLNonNull } = require('graphql');
const { GraphQLDate } = require('graphql-iso-date');
const CurrencyEnumType = require('../object-types/currencty');

const CVEntryObjectType = require('../object-types/cvEntry');
const { dbHost } = require('../settings');

module.exports = {
    type: CVEntryObjectType,
    args: {
        cvId: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ?
            axios.post(`${dbHost}/cv-entries`, {
                id: uuid.v4(),
                cvId: args.cvId,
            })
            .then(response => {
                return response.data;
            })
            : {};
    },
};
