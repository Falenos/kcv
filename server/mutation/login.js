const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { GraphQLString, GraphQLNonNull } = require('graphql');

const CredentialsObjectType = require('./../object-types/credentials');
const { dbHost, secret } = require('./../settings');

module.exports = {
    type: CredentialsObjectType,
    args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parentValue, { email, password }, { res }) => {
        return axios
            .get(`${dbHost}/credentials`)
            .then(response => {
                if (email === response.data.email) {
                    return bcrypt.compare(password, response.data.password).then(passwordMatches => {
                        if (passwordMatches) {
                            const token = jwt.sign({
                                email: email,
                                password: response.data.password,
                            }, secret);

                            res.cookie('token', token, { maxAge: 60 * 60 * 24 * 7, httpOnly: true });

                            return { success: true };
                        }

                        return { success: false };
                    })
                } else {
                    return { success: false };
                }
            });
    },
};
