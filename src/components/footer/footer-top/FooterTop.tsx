import { Link } from 'react-router-dom';
import LogoSVG from '@public/Logo-dark-mode.svg?react';
import SocialItems from '@components/footer/footer-top/SocialItems.tsx';

const FooterTop = () => {
  return (
    <div className={'pt-20 pb-15 bg-gray-900'}>
      <div className="container">
        <div>
          <div className={'max-w-[280px]'}>
            <Link to={'/'} className={'group/edit'}>
              <LogoSVG className={'group-hover/edit:scale-110 duration-150'}/>
            </Link>
            <p className={'text-xs text-sublink mt-6 mb-[38px]'}>
              Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.
            </p>
            <SocialItems/>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;