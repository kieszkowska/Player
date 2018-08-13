import React, { Component } from 'react';
import Info from './Info';
import Controls from './Controls';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: true
        }

        this.changePlayState = this.changePlayState.bind(this);
    }

    changePlayState() {
        this.setState({
            play: !this.state.play
        })
    }

    render() {
        return (
            <div className='player'>
                <Info song={ this.props.song } />
                <Controls play={ this.state.play }
                          playHandler={ this.changePlayState }
                          nextSongHandler={ this.props.nextSongHandler }
                          previousSongHandler={ this.props.previousSongHandler }
                />
            </div>
        );
    }
}

export default Player;
