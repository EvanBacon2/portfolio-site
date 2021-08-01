import { React, Component } from 'react';

import 'css/ContentHeader.css';

export default class ContentHeader extends Component {
    render() {
        return (
            <div id='header-container'>
                <div class='extra-padding'>
                    <span id='content-title' class={this.props.theme}>
                        {this.props.title}
                    </span>
                </div>
                <hr id='content-underline' class={this.props.theme + ' ' + this.props.fadeAlignment}/>
            </div>
        );
    }
}