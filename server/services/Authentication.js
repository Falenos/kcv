const jwt = require('jsonwebtoken');
const axios = require('axios');
const { secret, dbHost } = require('../settings');

class Authentication {
    constructor() {
        this.credentials = null;
    }

    setCredentials() {
        if (this.credentials === null) {
            this.credentials = this.getCredentials();
        }
    }

    setForceCredentials() {
        this.credentials = this.getCredentials();
    }

    async getCredentials() {
        return axios
            .get(`${dbHost}/credentials`)
            .then(({ data: { email, password }}) => {
                return {
                    email,
                    password,
                    isSetUp: email !== null && password !== null,
                };
            }).catch(error => {
                console.log(error);
                return error;
            });
    }

    async isAuthenticated(token = null) {
        this.setCredentials();

        return this.credentials.then(({ email, password, isSetUp }) => {
            if (token && isSetUp) {
                return jwt.verify(token, secret, (error, jwt) => {
                    if (email === jwt.email && password === jwt.password) {
                        return true;
                    }
                });
            } else {
                return false;
            }
        });
    }

    async isSetUp() {
        this.setCredentials();

        return this.credentials.then(({ isSetUp }) => {
            return isSetUp;
        });
    }
}

module.exports = new Authentication();
