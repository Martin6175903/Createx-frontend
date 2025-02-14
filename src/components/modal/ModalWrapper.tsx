import ModalForm from '@components/forms/ModalForm.tsx';
import { IModalProps } from '@/types/modal.types.ts';
import { useNavigate } from 'react-router-dom';
import { MouseEvent, MouseEventHandler } from 'react';

const ModalWrapper = ({isOpenModal, setIsOpenModal}: IModalProps) => {
  const navigate = useNavigate();

  // @ts-ignore
  function handleCloseModal(e: MouseEventHandler<HTMLDivElement, MouseEvent>) {
    if (!e.target.classList.contains('modal')) return false;
    setIsOpenModal(false);
    navigate('');
  }

  return (
    <div onClick={handleCloseModal} className={`${isOpenModal ? 'modal' : 'hidden'} flex items-center justify-center`}>
      <ModalForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
};

export default ModalWrapper;