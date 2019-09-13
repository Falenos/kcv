import React, { Component } from 'react';
import './button-group.scss';

class ButtonGroup extends Component {
    render() {
        return <ul className={'button-group'}>
            {this.props.children
                && (
                    this.props.children.length
                        ? this.props.children.map((child, key) => <li className={'button-group-item'} key={key}>{child}</li>)
                        : this.props.children
                )
            }
        </ul>;

    }
}

export default ButtonGroup;