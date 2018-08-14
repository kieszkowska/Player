import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import share from '../../img/share.svg';
import favorite from '../../img/favorite.svg';

class SongsList extends Component {

    render() {
        return (
            <div className='songsContainer'>
                <div className='songsList'>
                    { this.props.songs.map((el, i) => {
                        return (
                            <div className='listElement' key={ i } onClick={ () => this.props.songHandler(i) }>
                                <Link to={ '/' }>
                                    <span className='secondaryText'>{ el.time } | { el.artist }</span>
                                    <br />
                                    <span className='title'>{ el.title }</span>
                                </Link>
                                <div key={ i * 100 } >
                                    <img className='btn-transparent' src={ share } alt='Share' />
                                    <img className={ el.favorite ? 'btn-transparent active' : 'btn-transparent' }
                                         src={ favorite }
                                         alt='Add to favorite'
                                         onClick={ () => this.props.favoriteHandler(i) }
                                    />
                                </div>
                            </div>
                        );
                    }) }
                </div>
                <div className='shadow'>{ null }</div>
            </div>
        );
    }
}

export default SongsList;
