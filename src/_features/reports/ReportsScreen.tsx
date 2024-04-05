import {Report} from './_models/Report.ts';
import {ReportsMenu} from './reports-menu/ReportsMenu.tsx';

const REPORTS_DUMMY_DATA: Report[] = [
  {
    id: 're-1',
    type: 'electricity',
    createdAt: new Date(),
  },
  {
    id: 're-2',
    type: 'water',
    createdAt: new Date(),
  },
  {
    id: 're-3',
    type: 'water',
    createdAt: new Date(),
  },
  {
    id: 're-4',
    type: 'gas',
    createdAt: new Date(),
  },
];

export const ReportsScreen = () => {
  const reports = REPORTS_DUMMY_DATA;

  return (
    <div className="grid grid-cols-[20%,1fr] grow border-t-[1px] border-separator">
      <ReportsMenu reports={reports} />
      <main className="bg-blurry-white">
        <article className="mx-6 p-6 bg-white">
          <header className="flex items-baseline gap-2 mb-4">
            <h1 className="text-2xl">Electricity</h1>
            <time className="opacity-50 text-sm">18h ago</time>
          </header>
        </article>
      </main>
    </div>
  );
};
