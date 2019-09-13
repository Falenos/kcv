import React, { Component } from 'react';
import { newEmptyCV } from '../../../graphql/mutations/cv';
import { cvQuery } from '../../../graphql/queries';
import { CV } from '../../../router/namespaces';
import ApolloClient from '../../../services/apollo-client';
import './create-cv.scss';

class CreateCV extends Component {
    render() {
        return <button
            onClick={this.handleNewEmptyCV.bind(this)}
            title={'New CV'}
            className={'create-cv'}
        >
            <span className={'create-cv-text'}>Create CV</span>
        </button>;
    }

    handleNewEmptyCV() {
        ApolloClient.mutate({
            mutation: newEmptyCV,
            update: (cache, { data: { createCV } }) => {
                const { getCVs } = cache.readQuery({ query: cvQuery });

                ApolloClient.cache.writeQuery({
                    query: cvQuery,
                    data: { getCVs: getCVs.concat([createCV]) },
                });
            },
        }).then(({ data: { createCV: { id }}}) => {
            this.props.history.push(`${CV}/${id}`);
        });
    }
}

export default CreateCV;
