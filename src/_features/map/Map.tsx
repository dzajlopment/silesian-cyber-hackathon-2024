import {useRef} from 'react';
import {MapContainer, TileLayer, MapContainerProps} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({children}: MapContainerProps) => {
  const mapRef = useRef(null);

  return (
    <MapContainer
      ref={mapRef}
      className="map-container h-full w-full absolute"
      center={[51.505, -0.09]}
      zoom={16}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
      {children}
    </MapContainer>
  );
};

export default Map;
