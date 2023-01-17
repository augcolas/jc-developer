import { Component } from "react";

import City from './City'
import '../Style/CityList.css';

class CityList extends Component {
  ApiKey = "7886a12c53604b2668a08582a04795afcc9375b0";

  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  getData() {
    fetch("https://api.jcdecaux.com/vls/v1/contracts?apiKey=" + this.ApiKey)
      .then((response) => response.json())
      .then((data) => {
        var filtered = [];
        Object.keys( data ).forEach( function( key ) {
          if( data[key].country_code === "FR" ) {
              filtered[key] = data[key];
          }
      });
        this.setState({ cities: filtered });
      })
      .catch((err) => console.error(this.props.url, err.toString()));
  }

  async componentDidMount() {
    this.getData();

  }
  render() {
    return (
      <ul className="navbar-nav ml-auto text-uppercase f1">
        {this.state.cities.map((city,index) => (
          <City key={index} city={city}/>
        ))}
      </ul>
    );
  }
}

export default CityList;
