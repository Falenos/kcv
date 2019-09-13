import React, { Component } from 'react';
import './page-header.scss';

class PageHeader extends Component {
    render() {
        return (
            <header className={'page-header'}>
                <h2 className={'page-header-title'}>{this.props.title}</h2>

                {this.props.children && <section className={'page-header-actions'}>
                    {this.props.children}
                </section>}
            </header>
        );
    }
}

export default PageHeader;