import { Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import { THEMES } from 'js/Themes';
import IosCard from 'js/IosCard';

import 'css/Projects.css';

export default class Projects extends Component {
    render() {
        return(
            <div class='projects'>
                <ContentHeader title='Projects' subTitle='' theme={THEMES.BRAND}/>
                <div class='gallery'>
                    <IosCard title='calendex' theme='calendex' toggleOverlay={this.props.toggleOverlay}/>
                </div>
            </div>
        );
    }
}