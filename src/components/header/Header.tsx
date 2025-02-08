import { useLocation } from 'react-router-dom';
import Navbar from '@components/navbar/Navbar.tsx';
import UILink from '@/UI/link/UILink.tsx';
import Profile from '@public/icons/profile-icon.svg?react';
import Logo from '@components/logo/Logo.tsx';
import Modal from '@components/modal/Modal.tsx';

const Header = () => {
  const {pathname} = useLocation();
  return (
    <header className={`py-5 ${ (pathname === '/' || pathname === '/course' || pathname === '/event')  ? 'bg-main' : 'bg-white'}`}>
      <div className="container">
        <div className={'flex justify-between text-base'}>
          <div className={'flex items-center'}>
            <Logo/>
            <Navbar/>
          </div>
          <div className={'flex gap-9 items-center'}>
            <div>
              <UILink isBg={false} paddingHorizontal={10} link={'mailto:martin6175903@yandex.ru'} title={'Get consultation'}/>
            </div>
            <div className={'flex gap-2 items-center'}>
              <Profile/>
              <Modal/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;