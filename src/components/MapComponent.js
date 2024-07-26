import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import MapIcon from '../images/location-pin.png'
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: MapIcon,
  iconUrl: MapIcon,
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [32,32],
  iconAnchor: [-130, 68],
  popupAnchor: [0, -60]
});


const MapComponent = () => {
  const position = [-7.9875202,-38.305457];
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <MapContainer center={position} zoom={13} style={{ height: '300px', width: isMobile ? "90%" : "50%" }}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ID}`}
        id="mapbox/dark-v10" 
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
      />
      <Marker position={position}>
        <Popup>
          Aqui está a localização selecionada.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
