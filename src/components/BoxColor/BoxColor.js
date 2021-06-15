import React, { Component } from 'react'
import "./BoxColor.css"

class BoxColor extends Component {
    render() {

        const Background = (r,g,b) => {
            return  { background: rgb(r,g,b)}
        }

        const rgb = (r,g,b) => {
            return  `rgb(${r}, ${g}, ${b})`
        }

        return(
            <div style={Background(this.props.r, this.props.g, this.props.b)} className="boxColor-container"> 
                <p>{rgb(this.props.r, this.props.g, this.props.b)}</p>
            </div>
        )
    }
}

export default BoxColor;