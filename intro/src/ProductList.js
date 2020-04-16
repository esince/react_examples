import React, { Component } from 'react'

export default class ProductList extends Component {
    //no need to constructor with new versions. ıt wont give any error.
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}
