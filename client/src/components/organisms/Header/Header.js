import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import Navigation from '../Navigation/Navigation';
import { DASHBOARD } from '../../../router/namespaces'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link
                    to={{ pathname: DASHBOARD }}
                >
                    APPPP
                </Link>

                <Navigation/>
            </header>
        );
    }
}

export default Header;
