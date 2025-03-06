import EventsItems from '@/pages/homepage/chunk/events/EventsItems.tsx';
import UILink from '@/UI/link/UILink.tsx';

const Events = () => {
  return (
    <section className={'py-20 bg-[rgb(254,219,210)]'}>
      <div className="container">
        <div className={'text-center'}>
          <h4 className="subtitle">Our Events</h4>
          <h2 className="title">Lectures & workshops</h2>
        </div>
        <EventsItems/>
        <div className={'flex items-center gap-10 justify-center'}>
          <p className={'font-bold text-[28px]'}>Do you want more?</p>
          <UILink isBg={true} whoElem={'large'} link={'events'} title={'Explore all events'}/>
        </div>
      </div>
    </section>
  );
};

export default Events;