import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

class MyMap extends React.Component {
  ApiKey = "7886a12c53604b2668a08582a04795afcc9375b0";

  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  getData() {
    fetch("https://api.jcdecaux.com/vls/v1/stations?contract=Marseille&apiKey=" + this.ApiKey)
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

  render() {
    return (
      <MapContainer className="map-container" center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}/>
      <Marker position={[50.505, -0.09]}/>
        
      
    </MapContainer>
    );
  }
}
export default MyMap;