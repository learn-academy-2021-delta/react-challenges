import React, { Component } from 'react'

export default class Logs extends Component {
    render() {
        return (
            <>
                <div onClick={this.props.click}>
                <h1>Click Box to Roll</h1>
                <h1>{this.props.showdice}</h1>
                </div>
            </>
        )
    }
}
