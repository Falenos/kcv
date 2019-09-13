import EditCV from '../../components/pages/EditCV/EditCV';
import { EDIT_CV } from '../namespaces';

export default {
    path: `${EDIT_CV}/:id`,
    component: EditCV,
    name: 'EditCV',
    displayInNavigation: false,
    protected: true,
};