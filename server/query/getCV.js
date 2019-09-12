const axios = require('axios');
const { GraphQLString } = require('graphql');

const CVObjectType = require('./../object-types/cv');
const { dbHost } = require('../settings');

module.exports = {
    type: CVObjectType,
    args: {
        id: { type: GraphQLString }
    },
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ?
            axios.get(`${dbHost}/cv/${args.id}`).then(response => {
                return response.data;
            })
            .catch(response => {
                return null;
            })
            : {};
    },
};
