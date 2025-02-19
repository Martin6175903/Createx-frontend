import EyeOpenIcon from '@public/icons/eye-open.svg?react';
import EyeCloseIcon from '@public/icons/eye-close.svg?react';
import { useEffect, useState } from 'react';
import styles from './UIInput.module.css';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
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
  const [isVisitField, setIsVisitField] = useState(false);
  const [isValidField, setIsValidField] = useState(false);

  const validIcon = String.fromCodePoint()

  const handleClickPass = () => {
    setIsVisiblePassword(!isVisiblePassword);
  }

  useEffect(() => {
    if (errors[nameInput]) setIsValidField(false);
    if (!errors[nameInput]) setIsValidField(true);
  }, [Object.values(errors).length]);

  return (
    <div className={'relative'}>
      <div className={'relative'}>
        <input
          {...register(nameInput, {
            ...useValidField(nameInput),
            required: isRequired ? 'This field is required!' : undefined,
            onBlur() {
              if (!isVisitField) setIsVisitField(true);
            }
          })}
          autoComplete={'off'}
          type={typeInput === 'password' ? (isVisiblePassword ? 'text' : 'password') : typeInput}
          className={`${styles.input} ${isVisitField ? (isValidField ? 'border-green-700' : 'border-red-600') : '' } ${typeInput === 'password' ? 'pl-4 pr-8' : 'px-4'} border-gray-400`}
          placeholder={placeholderText}
        />
        <button type={'button'} onClick={handleClickPass} className={`${typeInput === 'password' ? '' : 'hidden'} absolute right-8 top-[50%] translate-y-[-50%]`}>
          {!(typeInput === 'password') ? "" : (isVisiblePassword ? <EyeCloseIcon/> : <EyeOpenIcon/>)}
        </button>
        <span className={`absolute text-base leading-4 duration-200 top-[calc(50%-8px)] right-3 ${isValidField ? 'text-green-700' : 'text-red-600'}`}>
          {isVisitField ? (isValidField ? <>&#10004;</> : <>&#10006;</>) : ''}
        </span>
      </div>
      <p className={`absolute right-0 -top-[26px] text-sm ${isValidField ? 'text-green-700' : 'text-danger'}`}>{isVisitField ? (!isValidField ? `Ваш ${nameInput} некорректен!` : 'Это поле заполнено верно!') : ''}</p>
    </div>
  );
};

export default UIInput;