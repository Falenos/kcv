import CVPage from '../../components/pages/CV/CV';
import { CV } from '../namespaces';

export default {
    path: `${CV}/:id`,
    component: CVPage,
    name: 'CV',
    displayInNavigation: true,
    protected: false,
};
