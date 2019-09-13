import ApolloClient from './apollo-client';
import { getStatusQuery } from '../graphql/queries/status';

const authentication = {
    isLoggedIn: null,
    isSetup: null,
    loadingStatus: null,
};

authentication.loadingStatus = new Promise(resolve => {
    ApolloClient.query({ query: getStatusQuery }).then(({ data: { getStatus: { isSetup, isLoggedIn } } }) => {
        authentication.isLoggedIn = isLoggedIn;
        authentication.isSetup = isSetup;
        resolve();
    });
});

export default authentication;
