import {Table} from '@radix-ui/themes';
import {Device, DeviceTypeNames} from '../_models/Device.ts';

export type LiveUsageTableItemProps = {
  device: Device;
};

export const LiveUsageTableItem = (props: LiveUsageTableItemProps) => {
  const {id, location, type: deviceType, usageValue, usageUnit} = props.device;

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
      <Table.Cell>OK ?????</Table.Cell>
    </Table.Row>
  );
};
