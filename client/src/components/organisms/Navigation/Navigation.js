import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

import routes from '../../../router';

const navigationItems = routes.map(({ path, name, displayInNavigation = true }, index) => {
    if (!displayInNavigation) return false;

    return <li key={index} className="navigation-item">
        <Link
            to={{ pathname: path }}
            title={name}
        >
            <h2>{name}</h2>
        </Link>
    </li>;
});

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
                <ul className="navigation-items">
                    { navigationItems }
                </ul>
            </nav>
        );
    }
}

export default Navigation;
