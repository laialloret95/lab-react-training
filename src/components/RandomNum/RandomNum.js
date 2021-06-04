import React, { Component } from 'react'
import "./RandomNum.css"

class RandomNum extends Component {
    render() {
        const generateRandomNum = (min, max) => {
            return Math.floor(Math.random() * (max - min) + Number(min));
        }

        return(
            <div className="num-container">
                <p>Random Value between {this.props.min} and {this.props.max} {'=>'} {generateRandomNum(this.props.min,this.props.max) } </p>
            </div>
        )
    }
}

export default RandomNum;