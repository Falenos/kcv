import gql from 'graphql-tag';

export const createCredentials = (email, password) => gql `
    mutation {
        createCredentials(email: "${email}", password: "${password}") {
            success
        }
    }
`;
