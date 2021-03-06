import React, { Component } from 'react';
import gql from 'graphql-tag';
import Query from 'react-apollo/Query';
import Address from '../Address/Address';

const ADDRESSES_QUERY = gql `
    {
        addresses {
            id
            streetName
            streetNumber
            zipCode
            city
            country
        }
    }
`;

class Addresses extends Component {
    render() {
        return (
            <section>
                <h1>Addresses</h1>

                <Query query={ ADDRESSES_QUERY }>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return 'loading...';

                            return (
                                <ul>
                                    {
                                        data.addresses.map(address => {
                                            return (
                                                <li key={address.id}>
                                                    <Address address={address} />
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            )
                        }
                    }
                </Query>
            </section>
        );
    }
}

export default Addresses;
