import {Report} from '../_models/Report.ts';
import {ReportMenuItem} from './ReportsMenuItem.tsx';

export type ReportsMenuProps = {
  reports: Report[];
};

export const ReportsMenu = (props: ReportsMenuProps) => {
  return (
    <nav>
      <p className="p-4 border-b-[1px] border-separator">
        Reports <span className="opacity-50">({props.reports.length})</span>
      </p>
      <ul className="flex flex-col">
        {props.reports.map((report) => (
          <li key={report.id}>
            <ReportMenuItem report={report} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
