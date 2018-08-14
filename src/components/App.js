import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css';
import Player from './player/Player';
import List from './list/List'


let songs = [
    {
        artist: 'Icona Pop',
        title: 'Nights Like This',
        time: '3:27',
        favorite: false
    },
    {
        artist: 'Icona Pop',
        title: 'My Party',
        time: '3:48',
        favorite: false
    },
    {
        artist: 'Icona Pop',
        title: 'Lovers to Friends',
        time: '3:01',
        favorite: false
    },
    {
        artist: 'Icona Pop',
        title: 'Top Rated',
        time: '2:59',
        favorite: false
    },
    {
        artist: 'Icona Pop',
        title: 'Manners',
        time: '3:30',
        favorite: false
    },
    {
        artist: 'Icona Pop',
        title: 'Good for You',
        time: '3:34',
        favorite: false
    },
    {
        artist: 'Icona Pop',
        title: 'Wanna B With Somebody',
        time: '3:01',
        favorite: false
    },
    {
        artist: 'Icona Pop',
        title: 'Ready for the Weekend',
        time: '2:41',
        favorite: false
    },
    {
        artist: 'Icona Pop',
        title: 'Downtown',
        time: '2:37',
        favorite: false
    },
    {
        artist: 'Icona Pop',
        title: 'We Got the World',
        time: '3:17',
        favorite: false
    },
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSong: {
                id: 0,
                artist: songs[0].artist,
                title: songs[0].title,
                time: songs[0].time,
                favorite: songs[0].favorite
            }
        };

        this.changeSong = this.changeSong.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.previousSong = this.previousSong.bind(this);
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    changeSong(i) {
        this.setState({
            currentSong: {
                id: i,
                artist: songs[i].artist,
                title: songs[i].title,
                time: songs[i].time,
                favorite: songs[i].favorite,
            }
        });
    }

    nextSong() {
        let i = this.state.currentSong.id + 1;
        if (i >= songs.length) {
            i = 0;
        }
        this.setState({
            currentSong: {
                id: i,
                artist: songs[i].artist,
                title: songs[i].title,
                time: songs[i].time,
                favorite: songs[i].favorite,
            }
        });
    }

    previousSong() {
        let i = this.state.currentSong.id - 1;
        if (i < 0) {
            i = songs.length - 1;
        }
        this.setState({
            currentSong: {
                id: i,
                artist: songs[i].artist,
                title: songs[i].title,
                time: songs[i].time,
                favorite: songs[i].favorite,
            }
        });
    }

    addToFavorite(i) {
        songs[i].favorite = !songs[i].favorite;
        this.setState({
            currentSong: {
                id: i,
                artist: this.state.currentSong.artist,
                title: this.state.currentSong.title,
                time: this.state.currentSong.time,
                favorite: !this.state.currentSong.favorite
            }
        });
    }

    render() {
        const currentKey = window.location.pathname.split('/')[1] || '/';
        const timeout = { enter: 500, exit: 0 };

        return (
            <div className="App">
                <TransitionGroup component="main" className="page-main">
                    <CSSTransition key={ currentKey } timeout={ timeout } classNames="fade" appear>
                        <div className="page-main-inner">
                            <Switch location={ window.location }>
                                <Route exact path="/" render={() => (
                                    <Player song={ this.state.currentSong }
                                            nextSongHandler={ this.nextSong }
                                            previousSongHandler={ this.previousSong }
                                            favoriteHandler={ this.addToFavorite }
                                    />
                                )}  />
                                <Route exact path="/playlist" render={() => (
                                    <List songs={ songs }
                                          currentSong={ this.state.currentSong }
                                          songHandler={ this.changeSong }
                                          favoriteHandler={ this.addToFavorite }
                                    />
                                )} />
                                <Route render={() => <h4>404 Not Found</h4>} />
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default App;
