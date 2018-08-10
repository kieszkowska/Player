import React, { Component } from 'react';
import ListNav from './ListNav';
import SongsList from './SongsList';

class List extends Component {
    render() {
        return (
            <div className='list'>
                <ListNav />
                <SongsList />
            </div>
        );
    }
}

export default List;
