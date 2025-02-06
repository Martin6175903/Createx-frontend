import { Link } from 'react-router-dom';
import Logo from '@public/Logo.svg?react';

const Header = () => {
  const href = window.location.pathname;
  return (
    <header className={`pt-5 ${ (href === '/' || href === '/course' || href === '/event')  ? 'bg-main' : 'bg-white'}`}>
      <div className="container">
        <div>
          <Link to='/' className="logo">
            <Logo fill='pink'/>
          </Link>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;