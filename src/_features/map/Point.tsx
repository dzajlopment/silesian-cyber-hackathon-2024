import {Marker} from 'react-leaflet';
import L from 'leaflet';
import {InfoVariants} from './index';
import {generateMarkerStyle} from '../../utils';

export type PointProps = {
  position: [number, number];
  text: string;
  variant?: InfoVariants;
  dangerous?: boolean;
};

const Point = ({position, text, variant, dangerous = false}: PointProps) => {
  const markerStyle = generateMarkerStyle(variant || '', dangerous, text);

  return (
    <Marker
      position={position}
      icon={L.divIcon({
        className: markerStyle.className,
        html: markerStyle.html,
      })}
    />
  );
};

export default Point;
