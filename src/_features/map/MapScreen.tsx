import Accidents from './Accidents';
import {Map} from './index';
import Points from './Points';

const MapScreen = () => {
  return (
    <Map>
      <Accidents />
      <Points />
    </Map>
  );
};

export default MapScreen;
