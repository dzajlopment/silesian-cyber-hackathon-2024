import {Marker} from 'react-leaflet';

export type PointProps = {
  position: [number, number];
};

const Point = ({position}: PointProps) => {
  return <Marker position={position} />;
};

export default Point;
