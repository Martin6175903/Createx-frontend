import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import TeamItems from '@/pages/homepage/chunk/team/TeamItems.tsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
// Import Swiper styles
// @ts-ignore
import "swiper/css";


const Team = () => {

  const swiper = useSwiper();

  return (
    <section className={'pt-[166px] pb-[180px] bg-gray-200'}>
      <div className="container">
        <h4 className="subtitle">Best tutors are all here</h4>
        <h2 className="title">Meet our team</h2>
        <div className={'relative mt-15'}>
          <div className={'absolute -top-[72px] right-0'}>
            <button onClick={() => swiper.slidePrev()}><ArrowLeft /></button>
            <button onClick={() => swiper.slidePrev()}><ArrowRight /></button>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide><TeamItems/></SwiperSlide>
            <SwiperSlide><TeamItems/></SwiperSlide>
            <SwiperSlide><TeamItems/></SwiperSlide>
            <SwiperSlide><TeamItems/></SwiperSlide>
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Team;