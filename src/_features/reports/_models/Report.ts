export const ReportTypeNames = {
  electricity: 'Electricity',
  gas: 'Gas',
  water: 'Water',
  trash: 'Trash',
};

export type ReportType = keyof typeof ReportTypeNames;

export interface ReportUsage {
  last30min: number;
  last12hr: number;
  today: number;
}

export interface ReportUsageSource {
  coal: number;
  renewable: number;
  saved: number;
}

export interface Report {
  readonly id: string;
  type: ReportType;
  createdAt: Date;
  usage: ReportUsage;
  usageSource: ReportUsageSource;
}
