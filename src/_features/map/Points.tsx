import Point from './Point';

const POINTS = [
  {
    id: 'report_1',
    points: [51.505, -0.09],
    text: 'No ass',
    variant: 'water',
    isDangerous: false,
  },
] as const;

const Points = () => {
  return (
    <>
      {POINTS.map((p) => (
        <Point
          position={p.points as [number, number]}
          text={p.text}
          variant={p.variant}
          key={p.id}
          dangerous={p.isDangerous}
        />
      ))}
    </>
  );
};

export default Points;
