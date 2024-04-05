import {InfoVariants} from './Map';
import Point from './Point';

// Temporary array of points with their properties
const POINTS = [
  {
    id: 'report_1',
    points: [51.505, -0.09], // Latitude and longitude of the point
    text: '102', // Text content for the point
    variant: 'water', // Variant type for styling the point
    isDangerous: false, // Boolean flag indicating if the point is dangerous
  },
  {
    id: 'report_2',
    points: [51.315, -0.1], // Latitude and longitude of the point
    text: '10', // Text content for the point
    variant: 'gas', // Variant type for styling the point
    isDangerous: false, // Boolean flag indicating if the point is dangerous
  },
  {
    id: 'report_3',
    points: [51.205, 0.09], // Latitude and longitude of the point
    text: '80', // Text content for the point
    variant: 'electricity', // Variant type for styling the point
    isDangerous: false, // Boolean flag indicating if the point is dangerous
  },
] as const;

const Points = () => {
  return (
    <>
      {POINTS.map((p) => (
        <Point
          position={p.points as [number, number]} // Setting the position of the point
          text={p.text} // Setting the text content of the point
          variant={p.variant as InfoVariants} // Setting the variant type of the point
          key={p.id} // Setting the unique key for each point
          dangerous={p.isDangerous} // Setting the danger flag for the point
        />
      ))}
    </>
  );
};

export default Points;
