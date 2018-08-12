import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import audio from '../../img/audio.svg';

class VolumeSlider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            volume: 50
        }
    }

    componentDidMount() {
        let src = { audio };
        document.getElementsByClassName("rangeslider__handle")[0].setAttribute('style', 'background-image: url("' + src.audio + '") !important');
    }

    handleOnChange = (value) => {
        this.setState({
            volume: value
        })
    };

    render() {
        let { volume } = this.state;
        return (
            <Slider
                value={ volume }
                orientation="horizontal"
                onChange={ this.handleOnChange }
                tooltip={ false }
            />
        )
    }
}

export default VolumeSlider;
