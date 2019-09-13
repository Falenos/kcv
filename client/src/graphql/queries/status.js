import gql from 'graphql-tag';

export const getStatusQuery = gql `
    {
        getStatus {
            isSetup
            isLoggedIn
        }
    }
`;
