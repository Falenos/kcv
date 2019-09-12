const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Credentials',
    fields: () => ({
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        success: { type: GraphQLBoolean },
    }),
});
