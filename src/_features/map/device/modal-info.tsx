import {useParams} from 'react-router-dom';

const ModalInfo = () => {
  const {id} = useParams();

  console.log(id);

  return <div></div>;
};

export default ModalInfo;
