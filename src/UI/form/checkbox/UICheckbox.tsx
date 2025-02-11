import { useState } from 'react';

const UiCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label htmlFor="checkbox" className='pl-7 relative inline-block'>
        <div className={'absolute rounded-[3px] border-solid border border-gray-400 size-4 py-1 px-[3px] left-0 top-[calc(50%-10px)] leading-[1]'}>
          <span>&#10004;</span>
        </div>
        <input type="checkbox" id='checkbox' className='hidden'/>Keep me signed in
      </label>
    </div>
  );
};

export default UiCheckbox;