import React, { Component } from 'react';
import ListNav from './ListNav';
import SongsList from './SongsList';

class List extends Component {
    render() {
        return (
            <div className='list'>
                <ListNav />
                <SongsList songs={ this.props.songs }
                           songHandler={ this.props.songHandler }
                           favoriteHandler={ this.props.favoriteHandler }
                />
            </div>
        );
    }
}

export default List;
