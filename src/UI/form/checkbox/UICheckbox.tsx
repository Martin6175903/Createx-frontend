import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { ISignInFormInput } from '@/types/form/form.types.ts';
import styles from './UICheckbox.module.css';

interface UICheckboxProps {
  title: string
  register: UseFormRegister<ISignInFormInput>
}

const UICheckbox = ({title, register}: UICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const {pathname} = useLocation();

  return (
    <div>
      <label htmlFor="checkbox" className='pl-8 relative inline-block leading-[1] cursor-pointer select-none group/edit'>
        <div className={'h-8 flex items-center'}>
          <div className={`${styles['checkbox-list']} ${isChecked ? 'bg-primary border-primary' : ''}`}>
            <span className={`${isChecked ? 'text-white' : 'hidden'}`}>&#10004;</span>
          </div>
          <input
            {...register(pathname === '/login' ? 'mailing' : 'remember',
              {
                onChange(e) {setIsChecked(e.target.checked)}
            })}
            checked={isChecked}
            type="checkbox"
            id='checkbox'
            className='hidden'
          />
          <span className={'duration-200 group-hover/edit:scale-105'}>{title}</span>
        </div>
      </label>
    </div>
  );
};

export default UICheckbox;