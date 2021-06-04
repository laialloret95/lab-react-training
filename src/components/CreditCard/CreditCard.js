import React, { Component } from 'react'
import "./CreditCard.css"

class CreditCard extends Component {
    render() {
        const cardImg = (card) => {
            if (card === 'Visa') {
                return '/img/visa.png'
            } else {
                return 'img/master-card.svg'
            }
        }
        return(
            <div style={ {backgroundColor: this.props.bgColor, color: this.props.color} } className="card-container">
                <img src={cardImg(this.props.type)} alt="card-logo"/>
                <p className="cardNum">**** **** **** {this.props.number.slice(-4)}</p>
                <div className="bank-expiration">
                    <p>Expires {this.props.expirationMonth} / {this.props.expirationYear}</p>
                    <p>{this.props.bank}</p>
                </div>
                <p>{this.props.owner}</p>
            </div>
        )
    }
}

export default CreditCard;