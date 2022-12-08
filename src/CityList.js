import { Component } from "react";
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
        this.setState({ cities: data });
      })
      .catch((err) => console.error(this.props.url, err.toString()));
  }

  async componentWillMount() {
    this.getData();

  }
  render() {
    return (
      <div>
        {this.state.cities.map((city,i) => (
          <p>{city.name}</p>
        ))}
      </div>
    );
  }
}

export default CityList;
