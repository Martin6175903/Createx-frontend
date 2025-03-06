import { EventsItemTypes } from '@/types/homepage/events/eventsItem.types.ts';
import UILink from '@/UI/link/UILink.tsx';

const EventsItem = ({ event }: EventsItemTypes) => {
  const { day, month, time, title, subtitle } = event;
  // box-shadow: 0 4px 4px -4px rgba(30, 33, 44, 0.05), 0 12px 10px -6px rgba(255, 63, 58, 0.08), 0 30px 24px -10px rgba(255, 63, 58, 0.1), 0 80px 80px -20px rgba(255, 63, 58, 0.16);
  return (
    <div className={'flex relative z-0 hover:z-10 justify-between py-8 px-10 bg-white rounded group/item duration-200 hover:shadow-[0_4px_4px_-4px_rgba(30,33,44,0.05),0_12px_10px_-6px_rgba(255,63,58,0.08),0_30px_24px_-10px_rgba(255,63,58,0.1),0_80px_80px_-20px_rgba(255,63,58,0.16)] cursor-pointer'}>
      <div className={'flex items-center gap-5'}>
        <h2 className={'font-black text-[48px] leading-[1.3] tracking-wide text-primary'}>{day}</h2>
        <div className={'flex flex-col gap-1'}>
          <h5 className={'font-bold text-[20px]'}>{month}</h5>
          <p className={'text-base leading-[1.6] text-gray-600'}>{time}</p>
        </div>
      </div>
      <div className={'basis-[755px] flex flex-col gap-1'}>
        <h3 className={'font-bold text-[20px]'}>{title}</h3>
        <h4 className={'text-base leading-[1.6] text-gray-600'}>{subtitle}</h4>
      </div>
      <div>
        <UILink isBg={false} whoElem={'regular'} link={'events'} title={'View more'} otherProperties={'group-hover/item:bg-primary group-hover/item:text-white'}/>
      </div>
    </div>
  );
};

export default EventsItem;