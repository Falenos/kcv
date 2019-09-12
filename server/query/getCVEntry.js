const axios = require('axios');
const { GraphQLString } = require('graphql');

const CVEntryObjectType = require('./../object-types/cvEntry');
const { dbHost } = require('../settings');

module.exports = {
    type: CVEntryObjectType,
    args: {
        id: { type: GraphQLString }
    },
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ? axios
            .get(`${dbHost}/cv-entry/${args.id}`).then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            })
            : {};
    },
};
