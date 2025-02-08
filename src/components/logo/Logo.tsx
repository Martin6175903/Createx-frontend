import { Link } from 'react-router-dom';
import LogoSvg from '@public/Logo.svg?react';

const Logo = () => {
  return (
    <Link to='/' className="inline-block logo">
      <LogoSvg className={'hover:scale-105 duration-300'}/>
    </Link>
  );
};

export default Logo;