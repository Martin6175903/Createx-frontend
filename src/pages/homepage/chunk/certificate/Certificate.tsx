import logoImage1 from "@public/homepage/certificate/certificate-logo-1.png";
import logoImage2 from "@public/homepage/certificate/certificate-logo-2.png";
import logoImage3 from "@public/homepage/certificate/certificate-logo-3.png";
import certificateIllustration from "@public/homepage/certificate/certificate-bg.jpg";

const Certificate = () => {
  return (
    <section className={'py-30'}>
      <div className="container relative">
        <div className={'max-w-[397px]'}>
          <h4 className="subtitle">Createx Certificate</h4>
          <h2 className="title">Your expertise will be confirmed</h2>
          <p className={'mt-12 mb-8 text-base leading-[1.6] text-gray-800'}>We are accredited by international professional organizations and institutes:</p>
          <div className={'flex gap-10 items-center'}>
            <img src={logoImage1} alt="Certificate Logo"/>
            <img src={logoImage2} alt="Certificate Logo"/>
            <img src={logoImage3} alt="Certificate Logo"/>
          </div>
        </div>
        <img className={'absolute top-0 right-0'} src={certificateIllustration} alt="Certificate Illustration" />
      </div>
    </section>
  );
};

export default Certificate;