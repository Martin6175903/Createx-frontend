import EyeOpenIcon from '@public/icons/eye-open.svg?react';
import EyeCloseIcon from '@public/icons/eye-close.svg?react';
import { useState } from 'react';
import styles from './UIInput.module.css';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import useValidField from '@/hooks/useValidField.ts';
import { ISignInFormInput, ISignUpFormInput } from '@/types/form/form.types.ts';

interface UIInputProps {
  placeholderText: string
  typeInput: string
  isRequired?: boolean
  nameInput: string
  register: UseFormRegister<ISignInFormInput> | UseFormRegister<ISignUpFormInput>
  errors: FieldErrors<ISignInFormInput> | FieldErrors<ISignUpFormInput>
}

const UIInput = ({placeholderText, typeInput, isRequired, nameInput, register, errors}: UIInputProps) => {

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleClickPass = () => {
    setIsVisiblePassword(!isVisiblePassword);
  }

  return (
    <div>
      <div className={'relative'}>
        <input
          {...register(nameInput, {
            ...useValidField(nameInput),
            required: isRequired ? 'This field is required!' : undefined
          })}
          autoComplete={'off'}
          type={typeInput === 'password' ? (isVisiblePassword ? 'text' : 'password') : typeInput}
          className={`${styles.input} ${typeInput === 'password' ? 'pl-4 pr-8' : 'px-4'} border-gray-400`}
          placeholder={placeholderText}
        />
        <button type={'button'} onClick={handleClickPass} className={`${typeInput === 'password' ? '' : 'hidden'} absolute right-4 top-[50%] translate-y-[-50%]`}>
          {!(typeInput === 'password') ? "" : (isVisiblePassword ? <EyeCloseIcon/> : <EyeOpenIcon/>)}
        </button>
      </div>
      <p className={'text-danger text-xs'}>{errors[nameInput] ? `Ваш ${nameInput} некорректен!` : ''}</p>
    </div>

  );
};

export default UIInput;