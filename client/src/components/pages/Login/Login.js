import React, { Fragment, Component } from 'react';
import PageHeader from '../../organisms/PageHeader/PageHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import authentication from '../../../services/authentication';


export default class Login extends Component {
    state = {
        cvs: [],
    };

    render() {
        return (
            <Fragment>
                <PageHeader
                    title={authentication.isSetup ? 'Please log in' : 'Please set up your credentials'}/>
                <LoginForm history={this.props.history}/>
            </Fragment>
        );
    }
}
