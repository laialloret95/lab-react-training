import React, { Component } from 'react'

class Rating extends Component {
    render() {
        let stars = ["☆", "☆", "☆", "☆", "☆"];
        let rating = Math.round(parseFloat(this.props.children));
        
        for(let i = 0 ; i < rating; i++){
            stars[i] = '★';
        }

        return(
            <p>{stars.join('')}</p>
        )
    }
}

export default Rating;