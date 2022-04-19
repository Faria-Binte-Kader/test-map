import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./data/Skateboard_Parks.geojson";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function App() {
 
  return (
    <div>
      <ReactMapGL
        initialViewState={{
          latitude:  23.7771761,
          longitude: 90.399452,
          zoom: 14
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken='pk.eyJ1IjoiZmFyaWFiaW50ZWthZGVyIiwiYSI6ImNsMjVwMWdyNDA2YmozYm8wZDk1MDkyb2sifQ.MNgRzV6q5svRlvzeziFZsQ'
      >
         <Marker longitude={90.399452} latitude={23.7771761} color="red" />
      </ReactMapGL>
    </div>
  );
}
