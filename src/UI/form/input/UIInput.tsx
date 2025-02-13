import EyeOpenIcon from '@public/icons/eye-open.svg?react';
import EyeCloseIcon from '@public/icons/eye-close.svg?react';
import { useState } from 'react';

interface UIInputProps {
  placeholderText: string
  typeInput: string
  isRequired?: boolean
}

const UIInput = ({placeholderText, typeInput, isRequired}: UIInputProps) => {

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleClickPass = () => {
    setIsVisiblePassword(!isVisiblePassword);
  }

  return (
    <div className={'relative'}>
      <input type={typeInput === 'password' ? (isVisiblePassword ? 'text' : 'password') : typeInput} className={`w-full border border-solid border-gray-400 text-sm text-gray-800 tracking-wide py-3 ${typeInput === 'password' ? 'pl-4 pr-8' : 'px-4'} rounded bg-white placeholder:text-gray-600`} placeholder={placeholderText} required={isRequired}/>
      <button type={'button'} onClick={handleClickPass} className={`${typeInput === 'password' ? '' : 'hidden'} absolute right-4 top-[calc(50%-14px)]`}>
        {!(typeInput === 'password') ? "" : (isVisiblePassword ? <EyeCloseIcon/> : <EyeOpenIcon/>)}
      </button>
    </div>
  );
};

export default UIInput;