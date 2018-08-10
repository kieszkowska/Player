import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.svg';

class ListNav extends Component {
    render() {
        return (
            <div>
                <div className='listNav'>
                    <div className='link'>
                        <Link to={ '/' }>
                            <img src={ arrow } alt='Return to player' />
                        </Link>
                    </div>

                    <div className='listTitle'>
                        <h3>Playlist</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListNav;
