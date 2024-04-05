export const DeviceTypeNames = {
  'power-meter': 'Power Meter',
  'water-meter': 'Water Meter',
};

export type DeviceType = keyof typeof DeviceTypeNames;

export interface Device {
  readonly id: string;
  type: DeviceType;
  location: string;
  usageValue: number;
  usageUnit: string;
  status: 'no-signal' | 'ok' | 'alert';
  alertDescription?: string;
}
