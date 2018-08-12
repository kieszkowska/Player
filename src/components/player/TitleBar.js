import React, { Component } from 'react';

class TitleBar extends Component {
    render() {
        return (
            <div className='titleBar'>
                <div>
                    <span className='artist'>Icona Pop</span>
                    <br />
                    <span className='title'>Still Don't Know</span>
                </div>
            </div>
        );
    }
}

export default TitleBar;
