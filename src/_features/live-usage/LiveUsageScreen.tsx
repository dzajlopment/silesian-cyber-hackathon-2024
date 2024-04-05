import {Device} from './_models/Device.ts';
import {LiveUsageTable} from './live-usage-table/LiveUsageTable.tsx';

const DEVICES_DUMMY_DATA: Device[] = [
  {
    id: 'pm-1',
    type: 'power-meter',
    location: 'Laboratory Power Station',
    usageValue: 2,
    usageUnit: 'kWh',
    status: 'ok',
  },
  {
    id: 'pm-2',
    type: 'power-meter',
    location: 'Main Power Station',
    usageValue: 11.4,
    usageUnit: 'kWh',
    status: 'no-signal',
  },
  {
    id: 'pm-3',
    type: 'power-meter',
    location: 'Main Power Station',
    usageValue: 0,
    usageUnit: 'kWh',
    status: 'alert',
    alertDescription: 'No power',
  },
  {
    id: 'wm-1',
    type: 'water-meter',
    location: 'Water Pumping Station',
    usageValue: 3.5,
    usageUnit: 'l/min',
    status: 'ok',
    alertDescription: 'No power',
  },
  {
    id: 'wm-2',
    type: 'water-meter',
    location: 'Sewage Pump',
    usageValue: 12.2,
    usageUnit: 'l/min',
    status: 'ok',
  },
];

export const LiveUsageScreen = () => {
  const devices = DEVICES_DUMMY_DATA;

  return (
    <main className="px-6">
      <LiveUsageTable devices={devices} />
    </main>
  );
};
