import ModalForm from '@components/forms/ModalForm.tsx';
import { IModalProps } from '@/types/modal.types.ts';
import { useNavigate } from 'react-router-dom';
import { MouseEvent, MouseEventHandler, useState } from 'react';

const ModalWrapper = ({isOpenModal, setIsOpenModal}: IModalProps) => {
  const navigate = useNavigate();
  const [isMouseDownElemModal, setIsMouseDownElemModal] = useState(false);
  const [isMouseUpElemModal, setIsMouseUpElemModal] = useState(false);

  // @ts-ignore
  function handleCloseModal(e: MouseEventHandler<HTMLDivElement, MouseEvent>) {
    if (!isMouseDownElemModal || !isMouseUpElemModal) return false;
    setIsOpenModal(false);
    navigate('');
    setIsMouseDownElemModal(false);
    setIsMouseUpElemModal(false);
  }

  // @ts-ignore
  const handleMouseDown = (e: MouseEventHandler<HTMLDivElement, MouseEvent>) => {
    const target = e.target;
    if (!target.classList.contains('modal')) return false;
    setIsMouseDownElemModal(true);
  }

  // @ts-ignore
  const handleMouseUp = (e: MouseEventHandler<HTMLDivElement, MouseEvent>) => {
    const target = e.target;
    if (!target.classList.contains('modal')) return false;
    setIsMouseUpElemModal(true);
  }

  return (
    <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={handleCloseModal} className={`${isOpenModal ? 'modal' : 'hidden'} flex items-center justify-center`}>
      <ModalForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
};

export default ModalWrapper;