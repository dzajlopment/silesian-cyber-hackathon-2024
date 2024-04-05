import {Report, ReportTypeNames} from './_models/Report.ts';
import {PieChart} from 'react-minimal-pie-chart';

export type ReportSheetProps = {
  report: Report;
};

export const ReportSheet = (props: ReportSheetProps) => {
  const {createdAt, type: reportType, usageSource, usage} = props.report;

  const typeName = ReportTypeNames[reportType];
  const dateString = createdAt.toLocaleDateString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  return (
    <article className="mx-6 flex flex-col gap-6">
      <section className="bg-white p-6">
        <header className="flex items-baseline gap-2 mb-4">
          <h1 className="text-2xl">{typeName}</h1>
          <time className="opacity-50 text-sm">{dateString}</time>
        </header>
        <div className="w-64 py-6">
          <PieChart
            data={[
              {
                title: 'Renewable',
                value: usageSource.renewable,
                color: '#34c759',
              },
              {title: 'Coal', value: usageSource.coal, color: '#ffcc00'},
              {title: 'Saved', value: usageSource.saved, color: '#007aff'},
            ]}
            label={(props) => props.dataEntry.title}
            labelStyle={{fill: 'rgba(255,255,255,0.85)', fontSize: '0.5em'}}
          />
        </div>
      </section>
      <section className="bg-white p-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm opacity-50">Last 30 minutes</span>
            <strong className="text-2xl">{usage.last30min/1000}kWh</strong>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm opacity-50">Last 12 hours</span>
            <strong className="text-2xl">{usage.last12hr/1000}kWh</strong>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm opacity-50">Today</span>
            <strong className="text-2xl">{usage.today/1000}kWh</strong>
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
          software. This system will monitor energy consumption in real-time,
          identify inefficiencies, and optimize usage. By automating processes
          and <b>utilizing data-driven insights</b>, your enterprise can reduce
          costs, minimize environmental impact, and enhance brand reputation.
        </p>
      </section>
    </article>
  );
};
