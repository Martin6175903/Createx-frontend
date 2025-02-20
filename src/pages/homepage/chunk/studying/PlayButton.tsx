import PlayIcon from '@public/homepage/studying/play-button.svg?react';
import SVGHandler from '@/utilities/SVGHandler.tsx';

const PlayButton = () => {
  return (
    <div>
      <button className={'flex items-center group/edit gap-1'}>
        <div className={'p-4 bg-[rgb(254,200,192)] rounded-full'}>
          <div className={'p-[18px] bg-primary rounded-full flex items-center justify-center'}>
            <SVGHandler>
              <PlayIcon className={'group-hover/edit:scale-140 duration-200'}/>
            </SVGHandler>
          </div>
        </div>
        <span className={'text-sm font-bold group-hover/edit:scale-105 duration-200 group-hover/edit:pl-1'}>Play showreel</span>
      </button>
    </div>
  );
};

export default PlayButton;