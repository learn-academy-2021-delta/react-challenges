import React, { Component } from 'react'
class menu extends Component {
    render () {
        return (
            <>
           <ul>{this.props.menu.map(value => {
               return <li>{value}</li>
           })}</ul>
            </>
        )
    }
}