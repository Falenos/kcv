import React, { Component, Fragment } from 'react';

import { cvQuery, cvsQuery } from '../../../graphql/queries';
import { deleteCVQuery } from '../../../graphql/mutations/cv';
import ApolloClient from './../../../services/apollo-client';

import PageHeader from '../../organisms/PageHeader/PageHeader';
import ButtonGroup from '../../molecules/ButtonGroup/ButtonGroup';

import { EDIT_CV} from '../../../router/namespaces';
import { CView } from '../../organisms';
import { format } from "date-fns";

export default class CV extends Component {
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
                    title={`CV ${name || CV.formatDate(created)}`}
                >
                    <ButtonGroup>
                        <button
                            onClick={() => this.props.history.goBack()}
                            title={'Go Back'}
                        >
                            Go back
                        </button>

                        <button
                            onClick={() => this.props.history.push(`${EDIT_CV}/${id}`)}
                            title={'Edit'}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => this.deleteCV()}
                            title={'Delete'}
                        >
                            Delete
                        </button>
                    </ButtonGroup>
                </PageHeader>

                <CView
                    id={id}
                    created={created}
                    name={name}
                />
            </Fragment>
        );
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;

        console.log(this.props);

        ApolloClient.query({
            query: cvQuery(id),
        }).then(({ data: { getCV } }) => {
            this.setState({
                cv: { ...getCV },
            });
        });
    }

    deleteCV() {
        ApolloClient.mutate({
            mutation: deleteCVQuery(this.state.cv.id),
            update: (cache, { data: { deleteCV } }) => {
                const { getCVs } = cache.readQuery({ query: cvsQuery });

                ApolloClient.cache.writeQuery({
                    query: cvsQuery,
                    data: { getCVs: getCVs.reduce((accumulator, cv) => {
                        if (cv.id !== deleteCV.id) {
                            accumulator.push(cv);
                        }

                        return accumulator;
                    }, []) },
                });

                this.props.history.goBack();
            },
        });
    }

    static formatDate(date) {
        return format(new Date(date), 'yyyy-MM');
    }
}
