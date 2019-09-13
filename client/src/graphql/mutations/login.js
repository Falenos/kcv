import gql from 'graphql-tag';

export const login = (email, password) => gql `
    mutation {
        login(email: "${email}", password: "${password}") {
            success
        }
    }
`;
