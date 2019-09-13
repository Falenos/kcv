import React, { Component } from 'react';
import './cv-header.scss';

class CVHeader extends Component {
    render() {
        return <header className={'cv-header'}>
            <h1 className={'cv-header-title'}>
                CV<br/>
                {this.props.name}
            </h1>
        </header>;
    }
}

export default CVHeader;
