import {useRef} from 'react';
import {MapContainer, TileLayer, MapContainerProps} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Definition of type specifying the variants of information on the map
export type InfoVariants = 'power' | 'water' | 'gas' | 'trash' | 'alert';

// Map component taking children as MapContainerProps
const Map = ({children}: MapContainerProps) => {
  // Using useRef hook to get a reference to the map
  const mapRef = useRef(null);

  return (
    // MapContainer from react-leaflet library
    <MapContainer
      ref={mapRef} // Setting map reference
      className="map-container h-full w-full rounded-t-2xl p-1" // CSS class for map container
      center={[51.505, -0.09]} // Initial map center
      zoom={16} // Initial map zoom level
      scrollWheelZoom={true} // Enabling zooming with mouse wheel
      zoomControl={false} // Disabling zoom control
      attributionControl={false}>
      {/* Tile layer of the map */}
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
      {/* Rendering children of the Map component */}
      {children}
    </MapContainer>
  );
};

export default Map; // Exporting Map component
