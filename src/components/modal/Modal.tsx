import { Link } from 'react-router-dom';

const Modal = () => {
  return (
    <div className={'flex gap-1.5 font-bold leading-[1.6]'}>
      <Link to={'login'} className={'hover:text-primary hover:scale-105'}>Log in</Link>
      <span>/</span>
      <Link to={'register'} className={'hover:text-primary hover:scale-105'}>Register</Link>
    </div>
  );
};

export default Modal;