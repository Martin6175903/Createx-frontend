import advantagesIllustration from "@public/homepage/advantages/advantages-bg.png";
import ListItems from '@/pages/homepage/chunk/advantages/ListItems.tsx';
import UILink from '@/UI/link/UILink.tsx';

const Advantages = () => {
  return (
    <div className={'py-[180px]'}>
      <div className="container">
        <div className={'flex justify-between'}>
          <div>
            <img src={advantagesIllustration} alt='Advantages Illustration'/>
          </div>
          <div className={'basis-[390px]'}>
            <h4 className="subtitle">Who we are</h4>
            <h2 className="title">Why Createx?</h2>
            <ListItems/>
            <UILink isBg={true} whoElem={'regular'} link={'about'} title={'More about us'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;