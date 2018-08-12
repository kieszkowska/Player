import React, { Component } from 'react';
import NavBar from './NavBar';
import TitleBar from './TitleBar';
import background from '../../img/Icona_Pop_2012-119598_ETOALL_low@1X.png';

class Info extends Component {
    render() {
        return (
            <div className='info'>
                <NavBar />
                <div className='image' style={{ backgroundImage: `url(${background})` }}>
                    <div className='overlay'>{ null }</div>
                </div>
                <TitleBar />
            </div>
        );
    }
}

export default Info;
