import UILabel from '@/UI/form/label/UILabel.tsx';
import UIInput from '@/UI/form/input/UIInput.tsx';
import UICheckbox from '@/UI/form/checkbox/UICheckbox.tsx';
import { Link } from 'react-router-dom';
import UIButton from '@/UI/form/button/UIButton.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInFormInput } from '@/types/form/form.types.ts';

const SignIn = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<ISignInFormInput>({
    mode: 'onBlur'
  });

  const onHandleSubmit: SubmitHandler<ISignInFormInput> = () => {
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className={'flex flex-col gap-5'}>
      <div>
        <UILabel title={'Email'}/>
        <UIInput errors={errors} register={register} nameInput={'email'} placeholderText={'Your working email'} typeInput={'email'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput errors={errors} register={register} nameInput={'password'} placeholderText={'Your working password'} typeInput={'password'} isRequired={true}/>
      </div>
      <div className={'flex justify-between items-center text-sm'}>
        <UICheckbox register={register} title={'Keep me signed in'}/>
        <Link to={'/'} className={'text-primary duration-150 hover:scale-105'}>
          Forgot password?
        </Link>
      </div>
      <div>
        <UIButton title={'Sign in'} isSubmit={true}/>
      </div>
    </form>
  );
};

export default SignIn;