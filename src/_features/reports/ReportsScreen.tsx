import {Report} from './_models/Report.ts';
import {ReportsMenu} from './reports-menu/ReportsMenu.tsx';
import {ReportSheet} from './ReportSheet.tsx';

const REPORTS_DUMMY_DATA: Report[] = [
  {
    id: 're-1',
    type: 'electricity',
    createdAt: new Date(),
    usage: {
      last30min: 12000,
      last12hr: 139000,
      today: 281000,
    },
    usageSource: {
      saved: 45,
      coal: 15,
      renewable: 23,
    },
  },
];

export const ReportsScreen = () => {
  const reports = REPORTS_DUMMY_DATA;
  const report = reports[0];

  return (
    <div className="grid grid-cols-[20%,1fr] grow border-t-[1px] border-separator">
      <ReportsMenu reports={reports} />
      <main className="bg-blurry-white">
        <ReportSheet report={report} />
      </main>
    </div>
  );
};
