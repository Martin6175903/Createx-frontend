import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IModalProps } from '@/types/modal.types.ts';

const Homepage = ({isOpenModal, setIsOpenModal}: IModalProps) => {

  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname === '/login') {
      setIsOpenModal(true);
    }
    if (pathname === '/register') {
      setIsOpenModal(true);
    }
  }, [pathname]);

  return (
    <div>
      <h1 className={'text-4xl text-danger'}>Hello world</h1>
    </div>
  );
};

export default Homepage;