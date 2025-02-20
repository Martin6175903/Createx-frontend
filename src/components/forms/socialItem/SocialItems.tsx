import FacebookIcon from '@public/icons/facebook.svg?react';
import GoogleIcon from '@public/icons/google.svg?react';
import TwitterIcon from '@public/icons/twitter.svg?react';
import LinkedInIcon from '@public/icons/linkedin.svg?react';
import SVGHandler from '@/utilities/SVGHandler.tsx';


const SocialItems = () => {

  return (
    <div className={`flex gap-3 justify-center items-center`}>
      <SVGHandler hoverBG={'primary'}><FacebookIcon/></SVGHandler>
      <SVGHandler hoverBG={'primary'}><GoogleIcon/></SVGHandler>
      <SVGHandler hoverBG={'primary'}><TwitterIcon/></SVGHandler>
      <SVGHandler hoverBG={'primary'}><LinkedInIcon/></SVGHandler>
    </div>
  );
};

export default SocialItems;