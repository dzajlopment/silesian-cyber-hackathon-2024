import {Marker} from 'react-leaflet';
import L from 'leaflet';
import {InfoVariants} from './index';

export type PointProps = {
  position: [number, number];
  text: string;
  variant?: InfoVariants;
};

const Point = ({position, text, variant}: PointProps) => {
  return (
    <Marker
      position={position}
      icon={L.divIcon({
        className:
          'rounded-full bg-blue-500 text-white flex justify-center items-center flex-row whitespace-nowrap !w-fit px-4 py-3 !h-auto font-bold',
        html: `<div>${text}</div>`,
      })}
    />
  );
};

export default Point;
