import {useEffect, useState} from 'react';
import {sendRequest} from '../../utils';
import {Marker} from 'react-leaflet';

const AccidentMarker = () => {
  return <Marker position={[0, 0]} />;
};

const Accidents = () => {
  const [accidents, setAccidents] = useState([]);

  useEffect(() => {
    sendRequest('accident').then((d) => setAccidents(d.data));
  }, []);

  console.log(accidents);

  return <>{accidents?.map((a) => <AccidentMarker />)}</>;
};

export default Accidents;
