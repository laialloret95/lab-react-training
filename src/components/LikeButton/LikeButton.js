import React, { Component } from 'react';

class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            color: 'white'
        }
    }
    handleClick = () => {
        this.setState({
            value: this.state.value + 1,
            color: this.getRandomBackgroundColor()
        })
        console.log(this.state.color)
    }

    getRandomBackgroundColor = () => {
        const colors = ['purple','blue','green','yellow','orange','red']
        const color = colors[Math.floor(Math.random()*colors.length)];
        return color;
    }
    render() {
        const { value, color } = this.state;
        return(
            <div>
                <button style={{backgroundColor: color}} onClick={this.handleClick}>{value}  {value === 1 ? 'Like' : 'Likes'}</button>
            </div>
        )
    }
}

export default LikeButton;