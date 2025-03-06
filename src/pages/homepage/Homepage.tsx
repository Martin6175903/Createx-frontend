import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IModalProps } from '@/types/modal.types.ts';
import Studying from '@/pages/homepage/chunk/studying/Studying.tsx';
import Advantages from '@/pages/homepage/chunk/advantages/Advantages.tsx';
import Courses from '@/pages/homepage/chunk/courses/Courses.tsx';
import Benefits from '@/pages/homepage/chunk/benefits/Benefits.tsx';
import Events from '@/pages/homepage/chunk/events/Events.tsx';
import Certificate from '@/pages/homepage/chunk/certificate/Certificate.tsx';

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
      <Studying/>
      <Advantages/>
      <Courses/>
      <Benefits/>
      <Events/>
      <Certificate/>
    </div>
  );
};

export default Homepage;