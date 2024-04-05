export const ReportTypeNames = {
  electricity: 'Electricity',
  gas: 'Gas',
  water: 'Water',
  trash: 'Trash',
};

export type ReportType = keyof typeof ReportTypeNames;

export interface Report {
  readonly id: string;
  type: ReportType;
  createdAt: Date;
}
