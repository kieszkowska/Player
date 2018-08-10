import React, { Component } from 'react';
import ListNav from './ListNav';
import SongsList from './SongsList';

class List extends Component {
    render() {
        return (
            <div>
                <ListNav />
                <SongsList />
            </div>
        );
    }
}

export default List;
