import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Player from './player/Player';
import List from './list/List'


let songs = [
    {
        artist: 'Icona Pop',
        title: 'Nights Like This',
        time: '3:27'
    },
    {
        artist: 'Icona Pop',
        title: 'My Party',
        time: '3:48'
    },
    {
        artist: 'Icona Pop',
        title: 'Lovers to Friends',
        time: '3:01'
    },
    {
        artist: 'Icona Pop',
        title: 'Top Rated',
        time: '2:59'
    },
    {
        artist: 'Icona Pop',
        title: 'Manners',
        time: '3:30'
    },
    {
        artist: 'Icona Pop',
        title: 'Good for You',
        time: '3:34'
    },
    {
        artist: 'Icona Pop',
        title: 'Wanna B With Somebody',
        time: '3:01'
    },
    {
        artist: 'Icona Pop',
        title: 'Ready for the Weekend',
        time: '2:41'
    },
    {
        artist: 'Icona Pop',
        title: 'Downtown',
        time: '2:37'
    },
    {
        artist: 'Icona Pop',
        title: 'We Got the World',
        time: '3:17'
    },
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch location={ window.location }>
                    <Route exact path="/" component={ Player } />
                    <Route exact path="/playlist" render={() => (
                        <List songs={ songs } />
                    )}/>
                    <Route render={() => <h4>404 Not Found</h4>} />
                </Switch>
            </div>
        );
    }
}

export default App;
