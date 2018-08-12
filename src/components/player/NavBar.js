import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../img/menu.svg';
import loop from '../../img/refresh 4.svg';
import shuffle from '../../img/shuffle.svg';
import repeat from '../../img/refresh 1.svg';

class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='controls'>
                    <img src={ loop } alt='Play playlist in loop' />
                    <img src={ shuffle } alt='Shuffle' />
                    <img src={ repeat } alt='Repeat' />
                </div>
                <div className='hamburger'>
                    <Link to={ '/playlist' }>
                        <img src={ menu } alt='Go to playlist' />
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;
