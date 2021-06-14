import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }
    }

    moveLeft = () => {
        const {index} = this.state
        if(index === 0) {
            this.setState ({
                index: 3
            })
        } else {
            this.setState ({
                index: index -1,
            })
        }
    }

    moveRight = () => {
        const {index} = this.state
        if(index === 3) {
            this.setState ({
                index: 0
            })
        } else {
            this.setState ({
                index: index +1,
            })
        }
    }

    render() {
        const { index } = this.state;
        return(
            <div className="cont">
                <button onClick={this.moveLeft}> {`<`} </button>
                <img className="dice" src={this.props.imgs[index]} alt="porfile-pic"/>
                <button onClick={this.moveRight}> {`>`} </button>
            </div>
        )
    }
}

export default Carousel;