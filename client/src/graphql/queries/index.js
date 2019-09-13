import gql from 'graphql-tag';

export const cvsQuery = gql `
    {
        getCVs {
            id
            name
            created
        }
    }
`;

export const cvQuery = id => gql `
    {
        getCVs(id: "${id}") {
            id
            created
            name
        }
    }
`;
