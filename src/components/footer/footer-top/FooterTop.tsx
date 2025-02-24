import { Link } from 'react-router-dom';
import LogoSVG from '@public/Logo-dark-mode.svg?react';
import SocialItems from '@components/footer/footer-top/SocialItems.tsx';
import ListLinks from '@components/footer/footer-top/list-links/ListLinks.tsx';
import ListLink from '@components/footer/footer-top/list-links/ListLink.tsx';
import { Mail, MoveRight, Smartphone } from 'lucide-react';

const FooterTop = () => {
  return (
    <div className={'pt-20 pb-15 bg-gray-900'}>
      <div className="container">
        <div className={'flex justify-between'}>
          <div className={'max-w-[280px]'}>
            <Link to={'/'} className={'group/edit'}>
              <LogoSVG className={'group-hover/edit:scale-110 duration-150'} />
            </Link>
            <p className={'text-xs text-sublink mt-6 mb-[38px]'}>
              Createx Online School is a leader in online studying. We have lots of courses and programs from the main
              market experts. We provide relevant approaches to online learning, internships and employment in the
              largest companies in the country.
            </p>
            <SocialItems />
          </div>
          <ListLinks title={'SITE MAP'}>
            <ListLink title={'About Us'} link={'about'} />
            <ListLink title={'Courses'} link={'courses'} />
            <ListLink title={'Events'} link={'event'} />
            <ListLink title={'Blog'} link={'blog'} />
            <ListLink title={'Contacts'} link={'contacts'} />
          </ListLinks>
          <ListLinks title={'COURSES'}>
            <ListLink title={'Marketing'} link={'about'} />
            <ListLink title={'Management'} link={'courses'} />
            <ListLink title={'HR & Recruting'} link={'event'} />
            <ListLink title={'Design'} link={'blog'} />
            <ListLink title={'Development'} link={'contacts'} />
          </ListLinks>
          <ListLinks title={'CONTACT US'}>
            <li className={'flex gap-2 items-center group/link'}>
              <Mail className={'text-sublink group-hover/link:text-white duration-300'} size={16}/>
              <a className={'group-hover/link:underline group-hover/link:text-white duration-300'} href="tel:+74055550128">(405) 555-0128</a>
            </li>
            <li className={'flex gap-2 items-center group/link'}>
              <Smartphone className={'text-sublink group-hover/link:text-white duration-300'} size={16}/>
              <a className={'group-hover/link:underline group-hover/link:text-white duration-300'} href="mailto:hello@createx.com">hello@createx.com</a>
            </li>
          </ListLinks>
          <div className={'basis-[286px]'}>
            <ListLinks title={'SIGN UP TO OUR NEWSLETTER'}>
              <div className={'flex flex-col gap-3'}>
                <form>
                  <label className={'relative'} htmlFor="footer-input">
                    <input className={'py-2.5 pl-3 pr-8 border-solid border-2 border-[rgba(255,255,255,0.2)] rounded bg-[rgba(255,255,255,0.12)] w-full placeholder:text-sublink placeholder:text-xs focus:border-gray-300 duration-300 text-white text-sm'} type="email" id={'footer-input'} placeholder={'Email address'}/>
                    <button type={'submit'} className={'absolute top-[calc(50%-8px)] right-4 group/icon'}><MoveRight className={'group-hover/icon:text-white duration-300 group-hover/icon:scale-120'} size={16}/></button>
                  </label>
                </form>
                <p className={'text-[10px] text-white'}>
                  *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
                </p>
              </div>
            </ListLinks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;