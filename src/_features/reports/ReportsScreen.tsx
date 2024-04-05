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
        <article className="mx-6 flex flex-col gap-6">
          <section className="bg-white p-6">
            <header className="flex items-baseline gap-2 mb-4">
              <h1 className="text-2xl">Electricity</h1>
              <time className="opacity-50 text-sm">18h ago</time>
            </header>
          </section>
          <section className="bg-white p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-sm opacity-50">Last 30 minutes</span>
                <strong className="text-2xl">12kWh</strong>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm opacity-50">Last 12 hours</span>
                <strong className="text-2xl">139kWh</strong>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm opacity-50">Today</span>
                <strong className="text-2xl">281kWh</strong>
              </div>
            </div>
          </section>
          <section className="bg-white p-6">
            <h2 className="mb-4">
              <span className="bg-[#007AFF] text-white px-3 py-1 rounded-full">
                AI
              </span>{' '}
              Suggestion
            </h2>
            <p>
              Implement a smart energy management system utilizing{' '}
              <b>IoT sensors</b>,<b>smart meters</b>, and energy management
              software. This system will monitor energy consumption in
              real-time, identify inefficiencies, and optimize usage. By
              automating processes and <b>utilizing data-driven insights</b>,
              your enterprise can reduce costs, minimize environmental impact,
              and enhance brand reputation.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};
