import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
    uri: `${window.location.origin}/graphql`,
    opts: {
        credentials: 'include',
    },
});

export default apolloClient;
