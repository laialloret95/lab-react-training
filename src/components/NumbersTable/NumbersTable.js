import React, { Component } from 'react';

class NumbersTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: this.generateArray(),
        }
    }

    generateArray = () => {
        const array = Array.from(Array((this.props.limit)).keys())
        return array
    }

    render() {
        const { array } = this.state;
        return(
            <div className='numbersContainer'>
                    {array.map((num, index) => {
                        return (
                            <div className='num'
                                style={{
                                    backgroundColor: (num + 1) % 2 === 0 ? 'red' : 'white',
                                }}
                                key = {index}>{num + 1}</div>
                        )
                    })}
            </div>
        )
    }
}

export default NumbersTable;