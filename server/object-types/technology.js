const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Technology',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    }),
});
