import React, { Component } from 'react';
import profiles from '../../data/berlin.json';


class FaceBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return(
            <div>
                    {profiles.map((profile, index) => {
                        return (
                            <div className='profile-container'
                                key = {index}>
                                <img src={profile.img} alt="profile-pic"></img>
                                <div className='content'> 
                                    <p> <strong>First Name:</strong> {profile.firstName} </p>
                                    <p> <strong>Last Name:</strong> {profile.lastName} </p>
                                    <p> <strong>Country:</strong> {profile.country} </p>
                                    <p> <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'} </p>
                                </div>

                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default FaceBook;