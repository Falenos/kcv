const {
    GraphQLObjectType,
    GraphQLID,
    // GraphQLString,
    // GraphQLInt,
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'CVEntry',
    fields: () => ({
        id: { type: GraphQLID },
    }),
});
