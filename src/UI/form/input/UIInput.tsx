import EyeOpenIcon from '@public/icons/eye-open.svg?react';
import EyeCloseIcon from '@public/icons/eye-close.svg?react';
import { useState } from 'react';

interface UIInputProps {
  placeholderText: string
  isPassword?: boolean
}

const UIInput = ({placeholderText, isPassword}: UIInputProps) => {

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleClickPass = () => {
    setIsVisiblePassword(!isVisiblePassword);
  }

  return (
    <div className={'relative'}>
      <input type={isVisiblePassword ? 'text' : 'password'} className={`w-full border border-solid border-gray-400 text-sm text-gray-800 tracking-wide py-3 ${isPassword ? 'pl-4 pr-8' : 'px-4'} rounded bg-white placeholder:text-gray-600`} placeholder={placeholderText}/>
      <button onClick={handleClickPass} className={`${isPassword ? '' : 'hidden'} absolute right-4 top-[calc(50%-14px)]`}>
        {!isPassword ? "" : (isVisiblePassword ? <EyeCloseIcon/> : <EyeOpenIcon/>)}
      </button>
    </div>
  );
};

export default UIInput;