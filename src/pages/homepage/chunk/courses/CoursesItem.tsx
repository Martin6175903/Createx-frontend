import { ReactNode } from 'react';

interface CoursesItemProps {
  children: ReactNode
}

const CoursesItem = ({ children }: CoursesItemProps) => {
  return (
    <div className={'flex gap-8 items-center'}>
      <div>{children}</div>
      <div>

      </div>
    </div>
  );
};

export default CoursesItem;