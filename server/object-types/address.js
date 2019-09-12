const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Address',
    fields: () => ({
        id: { type: GraphQLID },
        streetName: { type: GraphQLString },
        streetNumber: { type: GraphQLString },
        zipCode: { type: GraphQLString },
        city: { type: GraphQLString },
        country: { type: GraphQLString },
    }),
});
