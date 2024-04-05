import {useRef} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export type MapContainerProps = {
  children?: React.ReactNode;
};

const Map = (props: MapContainerProps) => {
  const mapRef = useRef(null);

  return (
    <MapContainer
      ref={mapRef}
      className="map-continer h-full w-full absolute"
      center={[51.505, -0.09]}
      zoom={16}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
      {props.children}
    </MapContainer>
  );
};

export default Map;
