import FacebookIcon from '@public/icons/facebook.svg?react';
import GoogleIcon from '@public/icons/google.svg?react';
import TwitterIcon from '@public/icons/twitter.svg?react';
import LinkedInIcon from '@public/icons/linkedin.svg?react';


const SignSocial = () => {

  return (
    <div className={'flex gap-3 justify-center items-center'}>
      <button><FacebookIcon/></button>
      <button><GoogleIcon/></button>
      <button><TwitterIcon/></button>
      <button><LinkedInIcon/></button>
    </div>
  );
};

export default SignSocial;