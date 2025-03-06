import EventsItem from '@/pages/homepage/chunk/events/EventsItem.tsx';

const EventsItems = () => {

  const eventsInfo = [
    {
      day: 5,
      month: 'August',
      time: '11:00 - 14:00',
      title: 'Formation of the organizational structure of the company in the face of uncertainty.',
      subtitle: 'Online master-class'
    },
    {
      day: 24,
      month: 'July',
      time: '11:00 – 12:30',
      title: 'Building a customer service department. Best Practices.',
      subtitle: 'Online lecture'
    },
    {
      day: 16,
      month: 'July',
      time: '10:00 – 13:00',
      title: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
      subtitle: 'Online workshop'
    }
  ]

  return (
    <div className={'flex flex-col gap-6 mt-10 mb-15'}>
      {eventsInfo.map((event, index) => (
        <EventsItem event={event} key={index}/>
      ))}
    </div>
  );
};

export default EventsItems;