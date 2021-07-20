import { React, Component } from 'react';

import 'css/WebCard.css';

export default class ProjectCardImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coverState: ''
        }
    }

    displayCover() {
        this.setState({
            coverState: 'display-cover'
        });
    }

    hideCover() {
        this.setState({
            coverState: ''
        });
    }

    render() {
        return (
            <div class={'card-image ' + this.props.dimensions + '-image ' + this.props.theme + '-border'}
                     onMouseEnter={() => this.displayCover()} 
                     onMouseLeave={() => this.hideCover()}>
                    <div class={'card-image-cover left ' + this.props.theme + '-cover ' + this.state.coverState}></div>
                    <div class={'card-image-cover right ' + this.props.theme + '-cover ' + this.state.coverState}></div>
                    <div class='desc-container'>
                        <div class={'cover-desc ' + this.state.coverState}>{this.props.children}</div>
                        <a class={'learn-link ' + this.props.theme + '-link ' + this.state.coverState} href='https://github.com/EvanBacon2' 
                           target='_blank' rel='noreferrer'>
                            Learn More
                        </a>
                    </div>
            </div>
        );
    }
}