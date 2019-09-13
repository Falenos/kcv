import React, { Component } from 'react';

class Address extends Component {
    render() {
        return (
            <article>
                <h3>{this.props.address.streetName}</h3>
                <h3>{this.props.address.streetNumber}</h3>
                <h3>{this.props.address.streetName}</h3>
                <h3>{this.props.address.streetName}</h3>
            </article>
        );
    }
}

export default Address;
