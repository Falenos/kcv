import React, { Fragment, Component } from 'react';

import ApolloClient from './../../../services/apollo-client';

import { cvQuery } from '../../../graphql/queries';

import PageHeader from '../../organisms/PageHeader/PageHeader';
import ButtonGroup from '../../molecules/ButtonGroup/ButtonGroup';
import CView from '../../organisms/CView/CView';
import { format } from "date-fns";

export default class EditCV extends Component {
    state = {
        cv: {
            id: null,
            name: null,
            created: null,
        },
    };

    render() {
        const {id, name, created} = this.state.cv;
        return (
            <Fragment>
                <PageHeader
                    title={`Edit CV ${name || EditCV.formatDate(created)}`}
                >
                    <ButtonGroup>
                        <button
                            onClick={() => this.props.history.goBack()}
                            title={'Go Back'}
                        >
                            Go back
                        </button>
                    </ButtonGroup>
                </PageHeader>

                <CView
                    isEditable={true}
                    id={id}
                    created={created}
                    name={name}
                />

                <h1>Edit CV</h1>
            </Fragment>
        );
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;

        ApolloClient.query({
            query: cvQuery(id),
        }).then(({ data: { getCV } }) => {
            this.setState({
                cv: { ...getCV },
            });
        });
    }

    static formatDate(date) {
        return format(new Date(date), 'yyyy-MM');
    }
}
