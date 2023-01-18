import React, { useState } from "react";
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker,Popup } from "react-leaflet";
import leaflet from 'leaflet';

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

class MyMap extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    bounds: leaflet.latLngBounds(),
  }
  
  componentDidUpdate(prevProps) {
    console.log(this.state.bounds)
    if (JSON.stringify(prevProps.stations) !== JSON.stringify(this.props.stations)) {
      let newBounds = leaflet.latLngBounds();
      this.props.stations.forEach(marker => newBounds.extend(marker.position));
      this.setState({bounds: newBounds})

    }

  }

  render() {

console.log(this.props.stations)
    return (
      <div>
        {this.props.stations && this.state.bounds._southWest &&
          <MapContainer className="map-container" bounds={this.state.bounds}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {this.props.stations.map(station => (
              <Marker key={station.number} position={[station.position.lat, station.position.lng]} icon={ new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                <Popup><h4>{station.name}</h4><p><b>Adresse :</b> {station.address}</p><p><b>Vélos disponibles</b> : {station.available_bikes}</p><p><b>Places disponibles</b> : {station.available_bike_stands}</p></Popup>
              </Marker>
            ))}
          </MapContainer>}
      </div>

    );
  }
}
export default MyMap;