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
    constructor(props) {
        super(props);
        this.state = {
            currentSong: {
                id: 0,
                artist: songs[0].artist,
                title: songs[0].title,
                time: songs[0].time
            }
        };

        this.changeSong = this.changeSong.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.previousSong = this.previousSong.bind(this);
    }

    changeSong(i) {
        this.setState({
            currentSong: {
                id: i,
                artist: songs[i].artist,
                title: songs[i].title,
                time: songs[i].time
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
                time: songs[i].time
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
                time: songs[i].time
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
                                    />
                                )}  />
                                <Route exact path="/playlist" render={() => (
                                    <List songs={ songs }
                                          currentSong={ this.state.currentSong }
                                          songHandler={ this.changeSong }
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
