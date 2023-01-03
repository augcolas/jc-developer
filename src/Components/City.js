import React, { Component } from 'react'

export class City extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    console.log(this.props.city)
    return (
      <li>{this.props.city.name }</li>
    )
  }
}

export default City