import gql from 'graphql-tag';

export const newEmptyCV = gql `
    mutation {
        createCV {
            id
            created
            name
        }
    }
`;

export const deleteCVQuery = (id) => gql `
    mutation {
        deleteCV(id: "${id}") {
            id
        }
    }
`;
