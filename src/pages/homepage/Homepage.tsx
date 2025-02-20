import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IModalProps } from '@/types/modal.types.ts';
import Studying from '@/pages/homepage/chunk/studying/Studying.tsx';

const Homepage = ({ setIsOpenModal }: IModalProps) => {

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
      {/*<Studying/>*/}
    </div>
  );
};

export default Homepage;