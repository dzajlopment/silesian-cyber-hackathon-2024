import {Marker} from 'react-leaflet';
import L from 'leaflet';
import {InfoVariants} from './index';
import {generateMarkerStyle} from '../../utils';

// Type definition for props expected by the Point component
export type PointProps = {
  position: [number, number]; // Latitude and longitude of the marker position
  text: string; // Text content for the marker
  variant?: InfoVariants; // Optional variant type for different marker styles
  dangerous?: boolean; // Optional boolean flag indicating if the marker represents a dangerous location
};

// Point component definition
const Point = ({position, text, variant, dangerous = false}: PointProps) => {
  // Generating marker style using utility function
  const markerStyle = generateMarkerStyle(variant || '', dangerous, text);

  return (
    <Marker
      position={position}
      icon={L.divIcon({
        className: markerStyle.className, // Setting the class name for the marker
        html: markerStyle.html, // Setting the HTML content for the marker
      })}
    />
  );
};

export default Point;
