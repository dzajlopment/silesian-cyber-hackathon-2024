import {useRef} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';

export type MapContainerProps = {
  children?: React.ReactNode;
};

const Map = (props: MapContainerProps) => {
  const mapRef = useRef(null);

  return (
    <MapContainer ref={mapRef} className="map-continer h-full w-full absolute">
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.children}
    </MapContainer>
  );
};

export default Map;
