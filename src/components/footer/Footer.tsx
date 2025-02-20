import FooterTop from '@components/footer/footer-top/FooterTop.tsx';
import FooterBottom from '@components/footer/footer-bottom/FooterBottom.tsx';

const Footer = () => {
  return (
    <div className={'text-white'}>
      <FooterTop/>
      <FooterBottom/>
    </div>
  );
};

export default Footer;