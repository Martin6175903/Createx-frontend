import { Link, useLocation } from 'react-router-dom';
import Logo from '@public/Logo.svg?react';
import Navbar from '@components/navbar/Navbar.tsx';
import UILink from '@/UI/link/UILink.tsx';
import Profile from '@public/icons/profile-icon.svg?react';

const Header = () => {
  const {pathname} = useLocation();
  return (
    <header className={`py-5 ${ (pathname === '/' || pathname === '/course' || pathname === '/event')  ? 'bg-main' : 'bg-white'}`}>
      <div className="container">
        <div className={'flex justify-between text-base'}>
          <div className={'flex items-center'}>
            <Link to='/' className="logo">
              <Logo/>
            </Link>
            <Navbar/>
          </div>
          <div className={'flex gap-9 items-center'}>
            <div>
              <UILink isBg={true} paddingHorizontal={10} link={'mailto:martin6175903@yandex.ru'} title={'Get consultation'}/>
            </div>
            <div className={'flex gap-2 items-center'}>
              <Profile/>
              <div className={'flex gap-1.5 font-bold leading-[1.6]'}>
                <button>Log in</button><span>/</span><button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;