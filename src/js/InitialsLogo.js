import { useEffect } from 'react';

import {ReactComponent as InitialsIcon} from 'svg/initials.svg';

import 'css/InitialsLogo.css';

export default function InitialsLogo(props) {
    useEffect(() => {
        setTimeout(() => document.getElementById('initials-logo').classList.add('show-init'), 200)
    });
    
    return ( 
        <div id='initials-logo' class={'initials-sizer'}>
            <InitialsIcon class={'initials-shadow ' + props.theme}/>
        </div>
    );
}