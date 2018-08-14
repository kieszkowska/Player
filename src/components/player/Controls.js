import React, { Component } from 'react';
import VolumeSlider from './VolumeSlider';
import 'react-rangeslider/lib/index.css';
import share from '../../img/share.svg';
import play from '../../img/play.svg';
import pause from '../../img/pause.svg';
import next from '../../img/next.svg';
import previous from '../../img/previous.svg';
import favorite from '../../img/favorite.svg';

class Controls extends Component {
    render() {
        return (
            <div className='controls-container'>
                <div>
                    <VolumeSlider />
                </div>
                <div className='controls'>
                    <div className='btn'>
                        <img src={ share } alt="Share" />
                    </div>
                    <div className='music'>
                        <div className='btn primary' onClick={ () => this.props.previousSongHandler() }>
                            <img src={ previous } alt="Previous" />
                        </div>
                        <div className='btn btn-lg primary play' onClick={ () => this.props.playHandler() }>
                            <img src={ this.props.play ? pause : play } alt="Play/pause" />
                        </div>
                        <div className='btn primary' onClick={ () => this.props.nextSongHandler() }>
                            <img src={ next } alt="Next" />
                        </div>
                    </div>
                    <div className={ this.props.song.favorite ? 'btn active' : 'btn' }>
                        <img src={ favorite } alt="Favorite"
                             onClick={ () => this.props.favoriteHandler(this.props.song.id) }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Controls;
