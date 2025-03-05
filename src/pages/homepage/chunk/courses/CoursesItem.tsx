import { CourseTypes } from '@/types/homepage/course/course.types.ts';
import useCheckSphere from '@/hooks/useCheckSphere.ts';

interface CoursesItemProps {
  course: CourseTypes
}

const CoursesItem = ({ course }: CoursesItemProps ) => {

  const {src, price, title, sphere, author} = course;
  const colorSphere = useCheckSphere(sphere);
  console.log(colorSphere);

  return (
    <div className={'flex items-center gap-8 rounded border border-solid border-gray-300 shadow-[0_4px_4px_-4px_rgba(30,33,44,0.03),0_12px_10px_-6px_rgba(154,156,165,0.04),0_30px_24px_-10px_rgba(154,156,165,0.05),0_80px_80px_-20px_rgba(154,156,165,0.08)] hover:scale-105 duration-200 cursor-pointer'}>
      <div>
        <img className={'h-[214px]'} src={src} alt={title}/>
      </div>
      <div className={'flex flex-col gap-5'}>
        <div>
          <h5 className={`inline-block text-sm text-white py-1 px-2 rounded ${colorSphere}`}>{sphere}</h5>
        </div>
        <p className={'font-bold text-[20px]'}>{title}</p>
        <div className={'flex gap-2 items-center'}>
          <span className={'text-danger text-[18px]'}>${price}</span>
          <span className={'text-gray-700'}>|</span>
          <span className={'text-[18px] text-gray-500'}>by {author}</span>
        </div>
      </div>
    </div>
  );
};

export default CoursesItem;