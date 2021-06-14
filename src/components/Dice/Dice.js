import React, { Component } from 'react';

class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dice: this.getRandomDice()
        }
    }
    handleClick = () => {
        this.setState({
            dice: '/img/dice-empty.png'
        })
        setTimeout( () => {
            this.changeInitialDice();
          }, 1000);
    }

    changeInitialDice = () => {
        this.setState({
            dice: this.getRandomDice()
        })
    }

    getRandomDice = () => {
        const diceImg = ['/img/dice1.png','/img/dice2.png','/img/dice3.png','/img/dice4.png','/img/dice5.png','/img/dice6.png']
        const dice = diceImg[Math.floor(Math.random()*diceImg.length)];
        return dice;
    }

    render() {
        const { dice } = this.state;
        return(
            <div className="cont">
                <img className="dice" onClick={this.handleClick} src={dice} alt="porfile-pic"/>
            </div>
        )
    }
}

export default Dice;