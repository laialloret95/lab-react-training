import React, { Component } from 'react';
import './IdCard.css'

class IdCard extends Component {
    render() {
        const getBirthDate = birthDate => birthDate.toDateString();
        return(
            <div className="container">
                <img src={this.props.picture} alt="profile-pic"></img>
                <div className="content">
                    <p> <strong>firstName:</strong> {this.props.firstName}</p>
                    <p> <strong>lastName:</strong> {this.props.lastName}</p>
                    <p> <strong>gender:</strong> {this.props.gender}</p>
                    <p> <strong>height:</strong> {this.props.height}</p>
                    <p> <strong>birth:</strong> {getBirthDate(this.props.birth)}</p>
                </div>
            </div>
        )
    }
}

export default IdCard;