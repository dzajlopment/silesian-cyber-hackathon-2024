import {Marker} from 'react-leaflet';
import L from 'leaflet';
import {InfoVariants} from './index';
import {cn, generateMarkerStyle} from '../../utils';
import {useNavigate, useParams} from 'react-router-dom';

// Type definition for props expected by the Point component
export type PointProps = {
  id: string;
  position: [number, number]; // Latitude and longitude of the marker position
  text: string; // Text content for the marker
  variant?: InfoVariants; // Optional variant type for different marker styles
  dangerous?: boolean; // Optional boolean flag indicating if the marker represents a dangerous location
};

// Point component definition
const Point = ({
  position,
  text,
  variant,
  dangerous = false,
  id,
}: PointProps) => {
  const navigate = useNavigate();

  const {id: paramsId} = useParams();

  // Generating marker style using utility function
  const markerStyle = generateMarkerStyle(variant || '', dangerous, text);

  return (
    <Marker
      position={position}
      icon={L.divIcon({
        className: cn(
          markerStyle.className,
          id === paramsId ? 'animate-pulse' : '',
        ), // Setting the class name for the marker
        html: markerStyle.html, // Setting the HTML content for the marker
      })}
      eventHandlers={{
        click: () => {
          navigate(`device/${id}`);
        },
      }}
    />
  );
};

export default Point;
