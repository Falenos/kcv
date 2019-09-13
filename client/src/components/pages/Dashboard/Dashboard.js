import React, { Fragment, Component } from 'react';

import { cvQuery } from '../../../graphql/queries';
import CVList from '../../organisms/CVList/CVList';
import PageHeader from '../../organisms/PageHeader/PageHeader';
import ApolloClient from './../../../services/apollo-client';

export default class Dashboard extends Component {
    state = {
        cvs: [],
    };

    render() {
        return (
            <Fragment>
                <PageHeader title={'CVs'}/>

                <CVList
                    history={this.props.history}
                    cvs={this.state.cvs}
                />
            </Fragment>
        );
    }

    componentDidMount() {
        const cvs = ApolloClient.query({
            query: cvQuery,
        });

        cvs.then(({ data }) => {
            if (data) {
                this.setState({
                    cvs: data.getCVs,
                });
            }
        });
    }
}
