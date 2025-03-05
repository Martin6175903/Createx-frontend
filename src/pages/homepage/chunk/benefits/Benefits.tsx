import BenefitsButtons from '@/pages/homepage/chunk/benefits/Buttons/BenefitsButtons.tsx';
import BenefitsIllustration from '@public/homepage/benefits/benefits-bg.svg';

const Benefits = () => {
  return (
    <div className={'mb-30'}>
      <div className="container">
        <div>
          <h4 className="subtitle text-center">Our benefits</h4>
          <h2 className="title text-center">That’s how we do it</h2>
          <BenefitsButtons/>
          <div className={'flex items-center justify-between'}>
            <div className={'basis-[495px]'}>
              <h3 className={'mb-6 font-black text-[32px] leading-[1.3]'}>Only practicing tutors</h3>
              <p className={'text-base leading-[1.6] text-gray-800 text-justify'}>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
            </div>
            <img src={BenefitsIllustration} alt="Benefits Illustration"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;