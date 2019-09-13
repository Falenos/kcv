import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import './cv-list.scss';
import { CV } from '../../../router/namespaces';
import CVSmallPreview from '../../molecules/CVSmallPreview/CVSmallPreview';
import CreateCV from '../../molecules/CreateCV/CreateCV';

export default class CVList extends Component {
    render() {
        return (
            <section className={'cv-list'}>
                <header className={'cv-header'}>
                    <CreateCV history={this.props.history}/>
                </header>

                <ul className="cv-list-items">
                    {this.getCVs()}
                </ul>
            </section>
        )
    }

    getCVs() {
        return this.props.cvs.map((cv, index) => (
            <li
                key={index + 1}
                className={'cv-list-item'}
            >
                <Link to={`${CV}/${cv.id}`} title={cv.id}>
                    <CVSmallPreview
                        previewSrc={null}
                        name={cv.name || CVList.formatDate(cv.created)}
                    />
                </Link>
            </li>
        ));
    }

    static formatDate(date) {
        return format(new Date(date), 'yyyy-MM');
    }
}
