const axios = require('axios');
const uuid = require('uuid');

const { GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');
const { GraphQLDate } = require('graphql-iso-date');

const CVObjectType = require('../object-types/cv');
const { dbHost } = require('../settings');

module.exports = {
    type: CVObjectType,
    resolve(parent, args, { isAuthenticated }) {
        return isAuthenticated ?
            axios.post(`${dbHost}/CVs`, {
                id: uuid.v4(),
                name: null,
                created: new Date(new Date().toUTCString()),
            })
            .then(response => {
                return response.data;
            })
            : {} ;
    },
};
