import React, { Component } from 'react'

export default class Logs extends Component {
    render() {
        return (
            <>
                <div>
                  {this.props.array.length && this.props.array.map(value => <h1>{value}</h1>)}
                </div>
            </>
        )
    }
}
