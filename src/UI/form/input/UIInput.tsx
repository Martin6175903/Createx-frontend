import EyeOpenIcon from '@public/icons/eye-open.svg?react';
import EyeCloseIcon from '@public/icons/eye-close.svg?react';
import { useState } from 'react';
import styles from './UIInput.module.css';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface UIInputProps {
  placeholderText: string
  typeInput: string
  isRequired?: boolean
  nameInput: string
  register: UseFormRegister<FieldValues>
}

const UIInput = ({placeholderText, typeInput, isRequired, nameInput, register}: UIInputProps) => {

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleClickPass = () => {
    setIsVisiblePassword(!isVisiblePassword);
  }

  return (
    <div className={'relative'}>
      <input {...register(nameInput)} type={typeInput === 'password' ? (isVisiblePassword ? 'text' : 'password') : typeInput} className={`${styles.input} ${typeInput === 'password' ? 'pl-4 pr-8' : 'px-4'}`} placeholder={placeholderText} required={isRequired}/>
      <button type={'button'} onClick={handleClickPass} className={`${typeInput === 'password' ? '' : 'hidden'} absolute right-4 top-[calc(50%-14px)]`}>
        {!(typeInput === 'password') ? "" : (isVisiblePassword ? <EyeCloseIcon/> : <EyeOpenIcon/>)}
      </button>
    </div>
  );
};

export default UIInput;