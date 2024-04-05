import {Report, ReportTypeNames} from '../_models/Report.ts';
import {NavLink} from 'react-router-dom';

export type ReportsMenuItemProps = {
  report: Report;
};

export const ReportMenuItem = (props: ReportsMenuItemProps) => {
  const {type: reportType, createdAt} = props.report;
  const typeName = ReportTypeNames[reportType];
  const dateString = new Date(createdAt).toLocaleDateString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  return (
    <NavLink
      to="/reports/123"
      className="flex flex-col px-4 py-2 rounded-xl [&.active]:opacity-50">
      {typeName} report
      <time className="opacity-50 text-xs">{dateString}</time>
    </NavLink>
  );
};
