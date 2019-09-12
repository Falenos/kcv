const axios = require('axios');
const { GraphQLID, GraphQLNonNull } = require('graphql');

const CVEntryObjectType = require('../object-types/cvEntry');
const { dbHost } = require('../settings');

module.exports = {
    type: CVEntryObjectType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ?
            axios.delete(`${dbHost}/cvEntries/${args.id}`)
            .then(({ data }) => {
                return data;
            })
            : {};
    },
};
