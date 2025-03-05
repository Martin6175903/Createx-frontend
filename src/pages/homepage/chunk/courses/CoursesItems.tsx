import CoursesItem from '@/pages/homepage/chunk/courses/CoursesItem.tsx';
import CoursesItemImage1 from '@public/homepage/courses/courses-person-1.png';
import CoursesItemImage2 from '@public/homepage/courses/courses-person-2.png';
import CoursesItemImage3 from '@public/homepage/courses/courses-person-3.png';
import CoursesItemImage4 from '@public/homepage/courses/courses-person-4.png';
import CoursesItemImage5 from '@public/homepage/courses/courses-person-5.png';
import CoursesItemImage6 from '@public/homepage/courses/courses-person-6.png';

const CoursesItems = () => {

  const dataCourses = [
    {
      src: CoursesItemImage1,
      sphere: 'Marketing',
      title: 'The Ultimate Google Ads Training Course',
      price: 100,
      author: 'Jerome Bell'
    },
    {
      src: CoursesItemImage2,
      sphere: 'Management',
      title: 'Prduct Management Fundamentals',
      price: 480,
      author: 'Marvin McKinney'
    },
    {
      src: CoursesItemImage3,
      sphere: 'HR & Recruting',
      title: 'HR  Management and Analytics',
      price: 200,
      author: 'Leslie Alexander Li'
    },
    {
      src: CoursesItemImage4,
      sphere: 'Marketing',
      title: 'Brand Management & PR Communications',
      price: 530,
      author: 'Kristin Watson'
    },
    {
      src: CoursesItemImage5,
      sphere: 'Management',
      title: 'Business Development Management',
      price: 400,
      author: 'Dianne Russell'
    },
    {
      src: CoursesItemImage6,
      sphere: 'Design',
      title: 'Graphic Design Basic',
      price: 500,
      author: 'Guy Hawkins'
    }
  ]

  return (
    <div className={'grid grid-cols-2 gap-[30px]'}>
      {dataCourses.map((course, index) => (
        <CoursesItem key={index} course={course}/>
      ))}
    </div>
  );
};

export default CoursesItems;