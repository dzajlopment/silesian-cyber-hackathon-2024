import {InfoVariants} from './Map';
import Point from './Point';

type Point = {
  id: string;
  points: [number, number];
  text: string;
  variant: InfoVariants;
  isDangerous: boolean;
};

// Temporary array of points with their properties
const POINTS: readonly Point[] = [
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
  {
    id: 'report_4',
    points: [51.55, -0.12],
    text: '50',
    variant: 'electricity',
    isDangerous: false,
  },
  {
    id: 'report_5',
    points: [51.42, -0.05],
    text: '20',
    variant: 'water',
    isDangerous: false,
  },
  {
    id: 'report_6',
    points: [51.38, -0.15],
    text: '15',
    variant: 'gas',
    isDangerous: false,
  },
  {
    id: 'report_7',
    points: [51.3, 0.02],
    text: '90',
    variant: 'trash',
    isDangerous: true,
  },
  {
    id: 'report_8',
    points: [51.27, 0.08],
    text: 'Methane leak detected!',
    variant: 'alert',
    isDangerous: true,
  },
  {
    id: 'report_9',
    points: [51.45, -0.08],
    text: '70',
    variant: 'electricity',
    isDangerous: false,
  },
  {
    id: 'report_10',
    points: [51.4, -0.1],
    text: '25',
    variant: 'gas',
    isDangerous: false,
  },
  {
    id: 'report_11',
    points: [51.35, -0.03],
    text: '40',
    variant: 'water',
    isDangerous: false,
  },
  {
    id: 'report_12',
    points: [51.32, -0.15],
    text: '55',
    variant: 'electricity',
    isDangerous: false,
  },
  {
    id: 'report_13',
    points: [51.48, -0.06],
    text: '85',
    variant: 'trash',
    isDangerous: true,
  },
];

const Points = () => {
  return (
    <>
      {POINTS.map((p) => (
        <Point
          position={p.points} // Setting the position of the point
          text={p.text} // Setting the text content of the point
          variant={p.variant} // Setting the variant type of the point
          key={p.id} // Setting the unique key for each point
          dangerous={p.isDangerous} // Setting the danger flag for the point
        />
      ))}
    </>
  );
};

export default Points;
