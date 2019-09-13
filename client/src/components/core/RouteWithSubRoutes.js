import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

export default (route) => {
    const isProtectedRoute =
        typeof route.protected === 'undefined'
        || (
            typeof route.protected !== 'undefined'
            && route.protected
        );

    return (
        isProtectedRoute
            ? <ProtectedRoute {...route}/>
            : <Route
                path={route.path}
                exact={route.exact}
                render={props => <route.component {...props} routes={route.routes} />}
            />
    );
};
