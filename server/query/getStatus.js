const StatusObjectType = require('./../object-types/status');

module.exports = {
    type: StatusObjectType,
    resolve(parent, args, { isAuthenticated, isSetUp } ) {
        return {
            isSetup: isSetUp,
            isLoggedIn: isAuthenticated,
        };
    },
};
