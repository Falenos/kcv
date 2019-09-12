const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
    name: 'Currency',
    values: {
        USD: {
            value: 0,
        },
        EUR: {
            value: 1,
        },
        PLN: {
            value: 2,
        },
    },
});
