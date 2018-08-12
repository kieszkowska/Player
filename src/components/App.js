import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Player from './player/Player';
import List from './list/List'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch location={ window.location }>
                    <Route exact path="/" component={ Player } />
                    <Route path="/playlist" component={ List } />
                    <Route render={() => <h4>404 Not Found</h4>} />
                </Switch>
            </div>
        );
    }
}

export default App;
