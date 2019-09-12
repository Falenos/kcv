const axios = require('axios');
const { GraphQLList } = require('graphql');

const CVObjectType = require('./../object-types/cv');
const { dbHost } = require('../settings');

module.exports = {
    type: GraphQLList(CVObjectType),
    resolve(parent, args, { isAuthenticated }) {
        return isAuthenticated ? axios.get(`${dbHost}/cv`).then(response => response.data) : {};
    }
};
