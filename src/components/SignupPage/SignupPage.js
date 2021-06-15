import React, { Component } from 'react';

class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            nationality: 'en'
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        this.setState ({
            [name]: e.target.value
        })
    }

    render() {
        const {email, password, nationality} = this.state
        let greeting = nationality === 'fr' ? "Bonjour" 
            : nationality === 'en' ? "Hello" 
            : nationality === 'de' ? "Hallo"  
            : "Hello";
            
        return(
            <div>
              <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={email} name="email" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Nationality</label>
                    <select name="nationality" id="inputState" className="form-control" onChange={this.handleChange}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary submit">Submit</button>
            </form>

            <div>

            </div>
                <p>{greeting}</p>
                <p>Your email address is: {email}</p>
                <p>Your email address is correct</p>
            </div>

        )
    }
}

export default SignupPage;