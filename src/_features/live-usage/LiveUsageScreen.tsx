import {Device} from './_models/Device.ts';
import {LiveUsageTable} from './live-usage-table/LiveUsageTable.tsx';
import {useEffect, useState} from 'react';

const API_URL = 'http://192.168.17.187:3000/api/v1';

export const LiveUsageScreen = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    (async () => {
      const request = await fetch(`${API_URL}/meter`);
      const json = await request.json();

      const x = json.data.map((entry: any) => {
        return {
          id: entry._id.slice(0, 8),
          type: `${entry.meterType}-meter`,
          location: entry.locationName,
          usageValue: entry.value,
          usageUnit:
            entry.meterType === 'gas'
              ? 'm3'
              : entry.meterType === 'power'
                ? 'kWh'
                : 'l/min',
          status:
            Math.random() > 0.3
              ? 'ok'
              : Math.random() > 0.2
                ? 'alert'
                : 'no-signal',
        } as Device;
      });
      setDevices(x);
    })();
  }, []);

  return (
    <main className="px-6">
      <LiveUsageTable devices={devices} />
    </main>
  );
};
