import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoia2VlcnRpc3VuZGFyYW0iLCJhIjoiY2w4eGt5NjR3MDdtZjN1bm5ndGIzaDJ1biJ9.STWDfKVqlNiHOZcEK1YCyw';

export default function App() {
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/keertisundaram/cl930tjyd000f15mn4woiblv7',
          center: [lng, lat],
          zoom: zoom
        });
      });

      useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        });
      });

      

    return (
        <div>
            <h1>Have I Been Gerrymandered?</h1>
            <div>
                <a href="https://www.house.gov/representatives/find-your-representative" target="_blank">
                <button class="buttons"> Find my District </button>
                </a>
            </div>
            <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
          <div ref={mapContainer} className="map-container" />
        </div>
      );
}
