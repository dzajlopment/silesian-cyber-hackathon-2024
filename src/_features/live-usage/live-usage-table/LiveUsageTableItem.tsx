import {Table} from '@radix-ui/themes';
import {Device, DeviceTypeNames} from '../_models/Device.ts';
import {StatusIndicator} from './_components/StatusIndicator.tsx';

export type LiveUsageTableItemProps = {
  device: Device;
};

export const LiveUsageTableItem = (props: LiveUsageTableItemProps) => {
  const {
    id,
    location,
    type: deviceType,
    usageValue,
    usageUnit,
    status,
  } = props.device;

  const deviceTypeName = DeviceTypeNames[deviceType];

  return (
    <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{deviceTypeName}</Table.Cell>
      <Table.Cell>{location}</Table.Cell>
      <Table.Cell className="text-right">
        {usageValue.toFixed(1)}
        <span className="opacity-50">{usageUnit}</span>
      </Table.Cell>
      <Table.Cell>
        <StatusIndicator status={status} />
      </Table.Cell>
    </Table.Row>
  );
};
