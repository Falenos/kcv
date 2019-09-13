import React, { Component } from 'react';
import './cv-preview.scss'

class CVSmallPreview extends Component {
    render() {
        return (
            <article className={'cv-preview'}>
                <img className={'cv-preview-img'} src={this.props.previewSrc} alt={this.props.name}/>
                <h3>{this.props.name}</h3>
            </article>
        );
    }
}

export default CVSmallPreview;
