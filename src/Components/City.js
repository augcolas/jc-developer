import React, { Component } from 'react'
import { MyContext } from '../App'

export class City extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <li className="nav-item">
            <a onClick={() => context.updateContract(this.props.city.name)} className="nav-link">{this.props.city.cities[0]}</a>
          </li>
        )}
      </MyContext.Consumer>
    );
  }
}

export default City