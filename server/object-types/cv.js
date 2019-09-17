const axios = require('axios');

const CVEntry = require('./cvEntry');
const { dbHost } = require('../settings');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} = require('graphql');

const { GraphQLDateTime, GraphQLDate } = require('graphql-iso-date');

module.exports = new GraphQLObjectType({
    name: 'CV',
    fields: () => ({
        id: { type: GraphQLID },
        created: { type: GraphQLDateTime },
        name: { type: GraphQLString },
        cvEntries: {
            type: new GraphQLList(CVEntry),
            resolve: (parent) => axios.get(`${dbHost}/cv-entries`).then(response => {
                return response.data.filter(CVEntry => {
                    return parent.id === CVEntry.cvId
                });
            }),
        },
    }),
});
