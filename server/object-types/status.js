const {
    GraphQLObjectType,
    GraphQLBoolean,
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Status',
    fields: () => ({
        isSetup: { type: GraphQLBoolean },
        isLoggedIn: { type: GraphQLBoolean },
    }),
});
