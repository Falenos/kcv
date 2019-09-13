import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LOGIN } from '../../router/namespaces';
import authentication from '../../services/authentication';

const ProtectedRoute = (route) => {
    return <Route
            path={route.path}
            exact={route.exact}
            render={props => {
                return authentication.isLoggedIn
                    ? <route.component {...props} routes={route.routes} />
                    : <Redirect to={{
                        pathname: LOGIN,
                    }} />;
            }}
        />;
};

export default ProtectedRoute;
