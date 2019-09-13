import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cv-view.scss';

import { CVHeader } from '../index';
import { format } from "date-fns";

class CView extends Component {
    render() {
        return this.props.id && <section className={'cv-view'}>
            <article className={'cv-view-container'}>
                <CVHeader
                    name={this.props.name}
                    isEditable={this.props.isEditable}
                />

                <section className={'cv-section'}>
                    {/*<CompanyDetails/>*/}
                </section>
            </article>
        </section>;
    }

    static formatDate(date) {
        return format(new Date(date), 'yyyy-MM');
    }

    static propTypes = {
        isEditable: PropTypes.bool,
        id: PropTypes.string,
        created: PropTypes.string,
        name: PropTypes.string,
    };

    static defaultProps = {
        isEditable: false,
    };
}

export default CView;
