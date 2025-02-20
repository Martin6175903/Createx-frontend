import StudyingIllustration from '@public/homepage/studying/studying-bg.svg?react';
import PlayButton from '@/pages/homepage/chunk/studying/PlayButton.tsx';
import UILink from '@/UI/link/UILink.tsx';
import Statistics from '@/pages/homepage/chunk/studying/statistics/Statistics.tsx';

const Studying = () => {
  return (
    <div className={'bg-main pt-[126px] text-base'}>
      <div className="container">
        <div className={'flex justify-between'}>
          <div className={'basis-[496px] pt-4'}>
            <PlayButton/>
            <h1 className={'font-black text-[64px] leading-[1.3] tracking-wide mt-5 mb-15'}>
              Enjoy studying with Createx Online Courses
            </h1>
            <div className={'flex gap-6'}>
              <UILink isBg={false} whoElem={'large'} link={'about'} title={'About Us'}/>
              <UILink isBg={true} whoElem={'large'} link={'courses'} title={'Export courses'}/>
            </div>
          </div>
          <div>
            <StudyingIllustration/>
          </div>
        </div>
        <Statistics/>
      </div>
    </div>
  );
};

export default Studying;