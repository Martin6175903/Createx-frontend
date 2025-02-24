import UILink from '@/UI/link/UILink.tsx';
import CoursesItems from '@/pages/homepage/chunk/courses/CoursesItems.tsx';

const Courses = () => {
  return (
    <div className={'mb-[180px]'}>
      <div className="container">
        <div>
          <div className={'flex items-end justify-between mb-15'}>
            <div>
              <h4 className="subtitle">Ready to learn?</h4>
              <h2 className="title">Featured Courses</h2>
            </div>
            <div>
              <UILink isBg={false} whoElem={'large'} link={'courses'} title={'View all courses'}/>
            </div>
          </div>
          <CoursesItems/>
        </div>
      </div>
    </div>
  );
};

export default Courses;