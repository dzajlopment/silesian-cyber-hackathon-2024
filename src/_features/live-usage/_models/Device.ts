export const DeviceTypeNames = {
  'power-meter': 'Power meter',
  'water-meter': 'Water meter',
};

export type DeviceType = keyof typeof DeviceTypeNames;

export const DeviceStatusNames = {
  'no-signal': 'No signal',
  ok: 'OK',
  alert: 'Alert',
};

export type DeviceStatus = keyof typeof DeviceStatusNames;

export interface Device {
  readonly id: string;
  type: DeviceType;
  location: string;
  usageValue: number;
  usageUnit: string;
  status: DeviceStatus;
  alertDescription?: string;
}
