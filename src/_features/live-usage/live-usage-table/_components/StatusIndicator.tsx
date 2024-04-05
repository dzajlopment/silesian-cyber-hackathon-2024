import {DeviceStatus, DeviceStatusNames} from '../../_models/Device.ts';

export type StatusIndicatorProps = {
  status: DeviceStatus;
};

export const StatusIndicator = (props: StatusIndicatorProps) => {
  const statusName = DeviceStatusNames[props.status];
  const statusColor = getStatusColor(props.status);

  return (
    <span className={`py-2 px-3 my-2 rounded-full ${statusColor}`}>
      {statusName}
    </span>
  );
};

const getStatusColor = (status: DeviceStatus) => {
  switch (status) {
    case 'no-signal':
      return 'bg-blue-50';
    case 'ok':
      return 'bg-[#B0C700]';
    case 'alert':
      return 'bg-[#FF883F]';
    default:
      return '';
  }
};
