import React, { Component } from 'react'

export class City extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link">{this.props.city.cities[0]}</a>
      </li>
    );
  }
}

export default City