import { useContext } from 'react';
import { ModalContext } from '@/App.tsx';
import { IModalProps } from '@/types/modal.types.ts';

const Modal = () => {

  const context: IModalProps | null = useContext(ModalContext);

  const handleClickLogIn = () => {
    context?.setModalInfo({isOpen: true, whoOpenModal: 'Sign In'});
    document.documentElement.style.overflowY = 'hidden';
  }

  const handleClickRegister = () => {
    context?.setModalInfo({isOpen: true, whoOpenModal: 'Sign Up'});
    document.documentElement.style.overflowY = 'hidden';
  }

  return (
    <div className={'flex gap-1.5 font-bold leading-[1.6]'}>
      <button onClick={handleClickLogIn} className={'hover:text-primary hover:scale-105'}>Log in</button>
      <span>/</span>
      <button onClick={handleClickRegister} className={'hover:text-primary hover:scale-105'}>Register</button>
    </div>
  );
};

export default Modal;