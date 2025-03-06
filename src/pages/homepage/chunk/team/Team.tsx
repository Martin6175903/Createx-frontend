import TeamItems from '@/pages/homepage/chunk/team/TeamItems.tsx';

const Team = () => {

  const settingsSlider = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section className={'pt-[166px] pb-[180px] bg-gray-200'}>
      <div className="container">
        <h4 className="subtitle">Best tutors are all here</h4>
        <h2 className="title">Meet our team</h2>
        <div className="slider-container">
        </div>
      </div>
    </section>
  );
};

export default Team;