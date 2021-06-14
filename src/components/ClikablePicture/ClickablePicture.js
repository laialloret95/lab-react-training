import React, { Component } from 'react';

class ClickablePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialPic:true
        }
    }
    handleClick = () => {
        this.setState({
            initialPic: !this.state.initialPic
        })
    }

    render() {
        const { initialPic } = this.state;
        return(
            <div>
                <img onClick={this.handleClick} src={initialPic  ? this.props.img : this.props.imgClicked} alt="porfile-pic"/>
            </div>
        )
    }
}

export default ClickablePicture;