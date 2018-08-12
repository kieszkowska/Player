import React, { Component } from 'react';
import Info from './Info';
import Controls from './Controls';

class Player extends Component {
    render() {
        return (
            <div className='player'>
                <Info />
                <Controls />
            </div>
        );
    }
}

export default Player;
