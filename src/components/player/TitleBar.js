import React, { Component } from 'react';

class TitleBar extends Component {
    render() {
        return (
            <div className='titleBar'>
                <div>
                    <span className='artist'>{ this.props.song.artist }</span>
                    <br />
                    <span className='title'>{ this.props.song.title }</span>
                </div>
            </div>
        );
    }
}

export default TitleBar;
