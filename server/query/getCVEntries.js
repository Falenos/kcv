const axios = require('axios');
const { GraphQLList } = require('graphql');

const CVEntryObjectType = require('../object-types/cvEntry');
const { dbHost } = require('../settings');

module.exports = {
    type: GraphQLList(CVEntryObjectType),
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ? axios.get(`${dbHost}/cv-entries`).then(response => response.data) : {};
    }
};
