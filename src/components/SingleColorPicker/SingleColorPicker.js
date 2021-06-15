import React, { Component } from 'react';

class SingleColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }
    }
    
    render() {
        const { color, value, onChange } = this.props;
        let BGcolor = color === 'R' ? "red" 
            : color === 'G' ? "green" 
            : color === 'B' ? "black"  
            : "white";

        return(
            <div className="colorPicker-container">
                <div className="square" style = {{backgroundColor: BGcolor}}>  </div>
                <p>{color}</p>
                <input type='number' max="255" min="0" step="25" name={color} value={value} onChange={(e) => onChange(e.target.value, color)}/>
            </div>
        )
    }
}

export default SingleColorPicker;