import {Cross2Icon, ExclamationTriangleIcon} from '@radix-ui/react-icons';
import {useParams} from 'react-router-dom';

const ModalInfo = () => {
  const {id} = useParams();

  //TODO: Send request for data by id on endpoint /devices/:id

  console.log(id);

  return (
    <div className="absolute left-6 top-6 bg-white rounded-2xl z-[99999] aspect-square p-5 pr-10">
      <div className="flex items-center justify-center gap-2.5">
        <div className="bg-[#FF883F] p-3 rounded-md">
          <ExclamationTriangleIcon className="size-5 text-white" />
        </div>
        <div className="-space-y-1">
          <div className="font-medium">Chłodzenie transformatora</div>
          <div className="text-sm text-[#FF883F]">Wykryto możliwy przeciek</div>
        </div>
      </div>
      <div></div>
      <button className="absolute right-3 top-4">
        <Cross2Icon />
      </button>
    </div>
  );
};

export default ModalInfo;
