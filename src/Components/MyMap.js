import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import leaflet from 'leaflet';

class MyMap extends React.Component {
  ApiKey = "7886a12c53604b2668a08582a04795afcc9375b0";
  constructor(props) {
    super(props);

    this.state = {
      stations: []
    };

    
    

  }

  componentDidMount() {
    fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=marseille&apiKey=${this.ApiKey}`)
      .then(response => response.json())
      .then(data => this.setState({ stations: data }));

  }



  render() {

    console.log(this.state.stations)
    const bounds = leaflet.latLngBounds();
    this.state.stations.forEach(marker => bounds.extend(marker.position));
    return (
      <MapContainer className="map-container" center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

{this.state.stations.map(station => (
            <Marker key={station.number} position={[station.position.lat,station.position.lng]} />
          ))}



      </MapContainer>
    );
  }
}
export default MyMap;