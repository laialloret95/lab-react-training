import React, { Component } from 'react';

class IdCard extends Component {
    render() {
        const getBirthDate = birthDate => birthDate.toDateString();
        return(
            <div>
                <p>lastName={this.props.lastName}</p>
                <p>firstName={this.props.firstName}</p>
                <p>gender={this.props.gender}</p>
                <p>height={this.props.height}</p>
                <p>birth={getBirthDate(this.props.birth)}</p>
                <img src={this.props.picture} alt="profile-pic"></img>
            </div>
        )
    }
}

export default IdCard;