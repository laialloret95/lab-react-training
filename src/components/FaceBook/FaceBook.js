import React, { Component } from 'react';
import profiles from '../../data/berlin.json';


class FaceBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: ''
        }
    }

    handleClick = (countrySelected) => {
        this.setState({
            country: countrySelected
        })
    }

    render() {
        const uniqueCountries = [...new Set(profiles.map(profile => profile.country))]
        const { country } = this.state

        return(
            <div>
                <div className='btn-container'>
                    {uniqueCountries.map((countryArray, index) => { 
                        return(
                            <button 
                                key = {index} 
                                className="country-btn"
                                style={
                                    country === countryArray
                                    ? { backgroundColor: 'lightblue' }
                                    : { backgroundColor: 'gray' }
                                }
                                onClick={() => this.handleClick(countryArray)}
                            >
                                {countryArray}
                            </button>
                        )
                    })}
                </div>

                {profiles.map((profile, index) => {
                    return (
                        <div className='profile-container'
                            key = {index}
                            style={
                                country === profile.country
                                    ? { backgroundColor: 'lightblue' }
                                    : { backgroundColor: 'white' }
                            }
                        >
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