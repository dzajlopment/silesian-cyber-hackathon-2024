import {Marker} from 'react-leaflet';

export type PointProps = {
  position: [number, number];
  text: string;
  variant?: '';
};

const Point = ({position, text}: PointProps) => {
  return <Marker position={position}>{text}</Marker>;
};

export default Point;
