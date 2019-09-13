import React from 'react';

import routes from '../../router';

import RouteWithSubRoutes from '../core/RouteWithSubRoutes';

const allRoutes = routes.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />
));

const AllRoutes = () => allRoutes;

export default AllRoutes;
