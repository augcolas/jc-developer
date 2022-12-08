
import { Component } from "react";
class CityList extends Component{
  ApiKey = "7886a12c53604b2668a08582a04795afcc9375b0";

  constructor() {
    super()
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/contracts?apiKey='+ this.ApiKey)
    // send the request
    xhr.send()
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}

export default CityList;