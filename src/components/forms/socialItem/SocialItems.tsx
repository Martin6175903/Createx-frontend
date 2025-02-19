import FacebookIcon from '@public/icons/facebook.svg?react';
import GoogleIcon from '@public/icons/google.svg?react';
import TwitterIcon from '@public/icons/twitter.svg?react';
import LinkedInIcon from '@public/icons/linkedin.svg?react';
import SocialItem from '@components/forms/socialItem/SocialItem.tsx';


const SocialItems = () => {

  return (
    <div className={`flex gap-3 justify-center items-center`}>
      <SocialItem><FacebookIcon/></SocialItem>
      <SocialItem><GoogleIcon/></SocialItem>
      <SocialItem><TwitterIcon/></SocialItem>
      <SocialItem><LinkedInIcon/></SocialItem>
    </div>
  );
};

export default SocialItems;