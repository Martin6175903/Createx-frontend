import CoursesItem from '@/pages/homepage/chunk/courses/CoursesItem.tsx';
import CoursesItemImage1 from '@public/homepage/courses/courses-person-1.png';
import CoursesItemImage2 from '@public/homepage/courses/courses-person-2.png';
import CoursesItemImage3 from '@public/homepage/courses/courses-person-3.png';
import CoursesItemImage4 from '@public/homepage/courses/courses-person-4.png';
import CoursesItemImage5 from '@public/homepage/courses/courses-person-5.png';
import CoursesItemImage6 from '@public/homepage/courses/courses-person-6.png';

const CoursesItems = () => {
  return (
    <div className={'grid grid-cols-2 gap-[30px]'}>
      <CoursesItem><img src={CoursesItemImage1} alt="Courses Item Image Person"/></CoursesItem>
      <CoursesItem><img src={CoursesItemImage2} alt="Courses Item Image Person"/></CoursesItem>
      <CoursesItem><img src={CoursesItemImage3} alt="Courses Item Image Person"/></CoursesItem>
      <CoursesItem><img src={CoursesItemImage4} alt="Courses Item Image Person"/></CoursesItem>
      <CoursesItem><img src={CoursesItemImage5} alt="Courses Item Image Person"/></CoursesItem>
      <CoursesItem><img src={CoursesItemImage6} alt="Courses Item Image Person"/></CoursesItem>
    </div>
  );
};

export default CoursesItems;