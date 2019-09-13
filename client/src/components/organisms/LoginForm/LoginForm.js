import React, { Component } from 'react';
import './login-form.scss';

import ApolloClient from './../../../services/apollo-client';
import { login } from './../../../graphql/mutations/login';
import { createCredentials } from './../../../graphql/mutations/createCredentials';

import { DASHBOARD } from './../../../router/namespaces';
import authentication from './../../../services/authentication';

class LoginForm extends Component {
    state = {
        email: null,
        password: null,
    };

    render(props) {
        return <form className={'login-form'} onSubmit={(event) => this.handleOnSubmit(event)}>
            <label
                htmlFor={'email'}
            >
                email:
            </label>

            <input
                className={'login-form-input'}
                id={'email'}
                type={'text'}
                name={'email'}
                onChange={({ currentTarget: { value } }) => this.setState({ email: value })}
            />

            <br/>

            <label
                htmlFor={'password'}
            >
                password:
            </label>

            <input
                className={'login-form-input'}
                id={'password'}
                type={'password'}
                name={'password'}
                onChange={({ currentTarget: { value } }) => this.setState({ password: value })}
            />

            <br/>

            <button
                className={'login-form-button'}
                type={'submit'}
            >
                Submit
            </button>
        </form>
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if (this.state.email.length > 0 && this.state.password.length > 0) {
            ApolloClient.mutate({
                mutation: authentication.isSetup
                    ? login(this.state.email, this.state.password)
                    : createCredentials(this.state.email, this.state.password),
            }).then(data => {
                if (
                    (
                        typeof data.data.login !== 'undefined'
                        && data.data.login.success
                    )
                    || (
                        typeof data.data.createCredentials !== 'undefined'
                        && data.data.createCredentials.success
                    )
                ) {
                    authentication.isLoggedIn = true;

                    if (!authentication.isSetup) {
                        authentication.isSetup = true;
                    }

                    this.props.history.push(DASHBOARD);
                }
            });
        }
    }
}

export default LoginForm;
