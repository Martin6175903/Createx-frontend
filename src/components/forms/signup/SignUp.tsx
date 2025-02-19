import UILabel from '@/UI/form/label/UILabel.tsx';
import UIInput from '@/UI/form/input/UIInput.tsx';
import UICheckbox from '@/UI/form/checkbox/UICheckbox.tsx';
import UIButton from '@/UI/form/button/UIButton.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpFormInput } from '@/types/form/form.types.ts';
import { useState } from 'react';

const SignUp = () => {

  const { handleSubmit, register, formState: { errors } } = useForm<ISignUpFormInput>({
    mode: 'onBlur'
  });

  const [isCompasionPasswords, setIsCompasionPasswords] = useState(true);

  const onSubmit: SubmitHandler<ISignUpFormInput> = (data) => {
    console.log(data);
    if (data.password !== data.confPassword) {
      setIsCompasionPasswords(false)
      return false;
    }
    if (!isCompasionPasswords) setIsCompasionPasswords(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-5'}>
      <div>
        <UILabel title={'Full Name'}/>
        <UIInput register={register} errors={errors} nameInput={'fullname'} placeholderText={'Your full name'} typeInput={'text'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Email'}/>
        <UIInput register={register} errors={errors} nameInput={'email'} placeholderText={'Your working email'} typeInput={'email'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput register={register} errors={errors} nameInput={'password'} placeholderText={'Your working password'} typeInput={'password'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput register={register} errors={errors} nameInput={'confPassword'} placeholderText={'Your confirm password'} typeInput={'password'} isRequired={true}/>
      </div>
      <div className={'flex justify-between items-center text-sm'}>
        <UICheckbox register={register} title={'Remember me'}/>
      </div>
      <div>
        <UIButton title={'Sign up'} isSubmit={true} isCompasionPasswords={isCompasionPasswords}/>
      </div>
    </form>
  );
};

export default SignUp;