import FacebookIcon from '@public/icons/facebook-24.svg?react';
import TwitterIcon from '@public/icons/twitter-24.svg?react';
import YoutubeIcon from '@public/icons/youtube-24.svg?react';
import TelegramIcon from '@public/icons/telegram-24.svg?react';
import InstagramIcon from '@public/icons/instagram-24.svg?react';
import LinkedInIcon from '@public/icons/linkedin-24.svg?react';
import SVGHandler from '@/utilities/SVGHandler.tsx';

const SocialItems = () => {
  return (
    <div className={'flex gap-6 items-center'}>
      <SVGHandler hoverBG={'white'}><FacebookIcon/></SVGHandler>
      <SVGHandler hoverBG={'white'}><TwitterIcon/></SVGHandler>
      <SVGHandler hoverBG={'white'}><YoutubeIcon/></SVGHandler>
      <SVGHandler hoverBG={'white'}><TelegramIcon/></SVGHandler>
      <SVGHandler hoverBG={'white'}><InstagramIcon/></SVGHandler>
      <SVGHandler hoverBG={'white'}><LinkedInIcon/></SVGHandler>
    </div>
  );
};

export default SocialItems;