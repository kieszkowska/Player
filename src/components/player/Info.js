import React, { Component } from 'react';
import NavBar from './NavBar';
import TitleBar from './TitleBar';

class Info extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>{ null }</div>
                <TitleBar />
            </div>
        );
    }
}

export default Info;
