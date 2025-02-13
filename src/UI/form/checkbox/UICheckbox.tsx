import { useState } from 'react';

interface UICheckboxProps {
  title: string
}

const UICheckbox = ({title}: UICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label htmlFor="checkbox" className='pl-8 relative inline-block leading-[1] cursor-pointer select-none group/edit'>
        <div className={'h-8 flex items-center'}>
          <div className={`absolute flex justify-center items-center duration-300 ${isChecked ? 'bg-primary border-primary' : ''} rounded-[3px] border-solid border border-gray-400 size-6 py-1 px-[3px] left-0 top-[calc(50%-12px)] leading-[1]`}>
            <span className={`${isChecked ? 'text-white' : 'hidden'}`}>&#10004;</span>
          </div>
          <input onChange={() => setIsChecked(!isChecked)} checked={isChecked} type="checkbox" id='checkbox' className='hidden'/>
          <span className={'duration-200 group-hover/edit:scale-105'}>{title}</span>
        </div>
      </label>
    </div>
  );
};

export default UICheckbox;