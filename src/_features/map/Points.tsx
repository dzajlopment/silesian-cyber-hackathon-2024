import {useEffect, useState} from 'react';
import {InfoVariants} from './Map';
import Point from './Point';
import {sendRequest} from '../../utils';

type Point = {
  id: string;
  points: [number, number];
  text: string;
  variant: InfoVariants;
  isDangerous: boolean;
};

const Points = () => {
  const [points, setPoints] = useState<any[]>([]);

  useEffect(() => {
    sendRequest('meter').then((data) => {
      setPoints(data.data);
      console.log(data.data);
    });
  }, []);

  return (
    <>
      {points?.map((p) => (
        <Point
          id={p._id}
          position={[p.lat, p.lon]} // Setting the position of the point
          text={p.value} // Setting the text content of the point
          variant={p.meterType} // Setting the variant type of the point
          key={p._id} // Setting the unique key for each point
          dangerous={p.state !== '660ffa45466f97af409548fb'} // Setting the danger flag for the point
        />
      ))}
    </>
  );
};

export default Points;
