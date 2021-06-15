import React, { Component } from 'react';
import SingleColorPicker from '../SingleColorPicker/SingleColorPicker';

class RGBColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            R: 0,
            G: 0,
            B: 0
        }
    }

    handleChange = (num, color) => {
        this.setState({
            [color]: num
        })
        console.log(this.state)
    }
    
    render() {
        const { R, G, B } = this.state
        const ColorResult = `rgb(${parseFloat(R)},${parseFloat(G)},${parseFloat(B)})`

        return(
            <div className="RGBcolor-container">

                <SingleColorPicker color="R" value={R} onChange={this.handleChange}/>
                <SingleColorPicker color="G" value={G} onChange={this.handleChange}/>
                <SingleColorPicker color="B" value={B} onChange={this.handleChange}/>

                <div className="colorPicker-container">
                    <div className="square" style = {{backgroundColor: ColorResult}}>  </div>
                    <p>{ColorResult}</p>
                </div>
            </div>
        )
    }
}

export default RGBColorPicker;