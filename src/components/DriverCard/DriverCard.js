import React, { Component } from 'react';
import Rating from '../Rating/Rating';
import "./DriverCard.css";

class DriverCard extends Component {
    render() {
        return(
            <div className="driverCard-container">
                <img src={this.props.img} alt="profile-pic" />
                <div className="driverCardContent-container">
                    <h1>{this.props.name}</h1>
                    <Rating>{this.props.rating}</Rating>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>

        )
    }
}

export default DriverCard;