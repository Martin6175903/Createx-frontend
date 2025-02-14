import UILabel from '@/UI/form/label/UILabel.tsx';
import UIInput from '@/UI/form/input/UIInput.tsx';
import UICheckbox from '@/UI/form/checkbox/UICheckbox.tsx';
import { Link } from 'react-router-dom';
import UIButton from '@/UI/form/button/UIButton.tsx';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const SignIn = () => {

  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-5'}>
      <div>
        <UILabel title={'Email'}/>
        <UIInput nameInput={'email'} register={register} placeholderText={'Your working email'} typeInput={'email'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput nameInput={'password'} register={register} placeholderText={'Your working password'} typeInput={'password'} isRequired={true}/>
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