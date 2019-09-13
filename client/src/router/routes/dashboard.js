import Dashboard from '../../components/pages/Dashboard/Dashboard';
import { DASHBOARD } from '../namespaces';

export default {
    path: DASHBOARD,
    exact: true,
    name: 'Dashboard',
    component: Dashboard,
    protected: true,
};
