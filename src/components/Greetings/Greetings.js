import React, { Component } from 'react'
import "./Greetings.css"

class Greetings extends Component {
    render() {
        const translation = (lang) => {
            if (lang === 'es') {
                return "Hola"
            } else if (lang === 'de') {
                return "Hallo"
            } else if (lang === 'fr') {
                return "Bonjour"
            } else {
                return "Hello"
            }
        }

        return(
            <div className="greeting-container">
                <p> {translation(this.props.lang)} {this.props.children}</p>
            </div>
        )
    }
}
export default Greetings;