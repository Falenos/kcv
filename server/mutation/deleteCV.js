const axios = require('axios');
const { GraphQLID, GraphQLNonNull } = require('graphql');

const CVObjectType = require('../object-types/cv');
const { dbHost } = require('../settings');

module.exports = {
    type: CVObjectType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parentValue, args, { isAuthenticated }) {
        return isAuthenticated ?
            axios.delete(`${dbHost}/cvs/${args.id}`)
            .then(responseCVDelete => {
                axios.get(`${dbHost}/cv-entries`).then(({ data }) => {
                    data.forEach(({ id }) => {
                        axios.delete(`${dbHost}/cv-entries/${id}`);
                    });
                });

                return {id: args.id};
            }).catch(error => {
                console.log(error);
            })
            : {};
    },
};
