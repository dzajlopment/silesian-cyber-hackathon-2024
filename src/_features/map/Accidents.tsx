import {useEffect, useState} from 'react';
import {sendRequest} from '../../utils';
import {Marker} from 'react-leaflet';
import L from 'leaflet';
import {renderToString} from 'react-dom/server';
import {PlusIcon} from '@radix-ui/react-icons';

const AccidentMarker = ({position}: {position: [number, number]}) => {
  return (
    <Marker
      position={position}
      icon={L.divIcon({
        className:
          'bg-red-500 rounded-full p-3 flex items-center justify-center relative', // Setting the class name for the marker
        html: renderToString(
          <div>
            <PlusIcon className="absolute left-1 top-1 text-white " />
          </div>,
        ), // Setting the HTML content for the marker
      })}
    />
  );
};

const Accidents = () => {
  const [accidents, setAccidents] = useState<any[]>([]);

  useEffect(() => {
    sendRequest('accident').then((d) => setAccidents(d.data));
  }, []);

  console.log(accidents);

  return (
    <>
      {accidents?.map((a) => (
        <AccidentMarker key={a._id} position={[a.lat, a.lon]} />
      ))}
    </>
  );
};

export default Accidents;
