const axios = require('axios');
const bcrypt = require('bcrypt');

const { GraphQLString, GraphQLNonNull } = require('graphql');

const CredentialsObjectType = require('./../object-types/credentials');
const jwt = require('jsonwebtoken');
const Authentication = require('../services/Authentication');
const { dbHost, saltRounds, secret } = require('./../settings');

module.exports = {
    type: CredentialsObjectType,
    args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parentValue, { email, password }, { res } ) => {
        return axios.get(`${dbHost}/credentials`).then(response => {
            if (response.data.email === null && response.data.password === null) {
               return bcrypt.hash(password, saltRounds).then(hash => {
                   return axios
                       .post(`${dbHost}/credentials`, {
                           email: email,
                           password: hash,
                       })
                       .then(() => {
                           const token = jwt.sign(
                               {
                                   email: email,
                                   password: hash,
                               },
                               secret
                           );

                           Authentication.setForceCredentials();
                           res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true });

                           return { success: true };
                       });
               });
           } else {
                return { success: false };
           }
        });
    },
};
