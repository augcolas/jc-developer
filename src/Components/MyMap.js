import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import leaflet from 'leaflet';

class MyMap extends React.Component {
  constructor(props) {
    super(props);






  }




  render() {

    if (this.props.stations) {
      const bounds = leaflet.latLngBounds();
      this.props.stations.forEach(marker => bounds.extend(marker.position));
    }
    return (
      <div>
        {this.props.stations &&
          <MapContainer className="map-container" center={[51.505, -0.09]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {this.props.stations.map(station => (
              <Marker key={station.number} position={[station.position.lat, station.position.lng]} />
            ))}
          </MapContainer>}
      </div>

    );
  }
}
export default MyMap;