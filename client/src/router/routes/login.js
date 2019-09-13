import Login from '../../components/pages/Login/Login';
import { LOGIN } from '../namespaces';

export default {
    path: LOGIN,
    exact: true,
    name: 'Login',
    component: Login,
    displayInNavigation: false,
    protected: false,
};
