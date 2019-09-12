const axios = require('axios');
const { GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');
const { GraphQLDate } = require('graphql-iso-date');

const CVObjectType = require('../object-types/cv');
const { dbHost } = require('../settings');

module.exports = {
    type: CVObjectType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID,) },
        name: { type: GraphQLString },
    },
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ? axios
            .patch(`${dbHost}/cvs/${args.id}`, args)
            .then(response => {
                return response.data;
            })
            : {};
    },
};
