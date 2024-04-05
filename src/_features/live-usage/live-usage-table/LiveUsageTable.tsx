import {Table} from '@radix-ui/themes';
import {Device} from '../_models/Device.ts';
import {LiveUsageTableItem} from './LiveUsageTableItem.tsx';

export type LiveUsageTableProps = {
  devices: Device[];
};

export const LiveUsageTable = (props: LiveUsageTableProps) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="text-right">
            Usage
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.devices.map((device) => (
          <LiveUsageTableItem key={device.id} device={device} />
        ))}
      </Table.Body>
    </Table.Root>
  );
};
