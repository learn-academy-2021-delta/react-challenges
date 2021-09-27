import React, { Component } from 'react'

class Rolldice extends Component{
    render() {
        return(
            <>
            <div onClick={this.props.click}>
                <h1>{this.props.integer}</h1>
            </div>
            </>
        )
    }
}
export default Rolldice