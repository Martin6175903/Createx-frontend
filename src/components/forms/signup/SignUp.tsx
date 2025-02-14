import UILabel from '@/UI/form/label/UILabel.tsx';
import UIInput from '@/UI/form/input/UIInput.tsx';
import UICheckbox from '@/UI/form/checkbox/UICheckbox.tsx';
import UIButton from '@/UI/form/button/UIButton.tsx';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const SignUp = () => {

  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-5'}>
      <div>
        <UILabel title={'Full Name'}/>
        <UIInput register={register} nameInput={'fullname'} placeholderText={'Your full name'} typeInput={'text'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Email'}/>
        <UIInput register={register} nameInput={'email'} placeholderText={'Your working email'} typeInput={'email'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput register={register} nameInput={'password'} placeholderText={'Your working password'} typeInput={'password'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput register={register} nameInput={'confPassword'} placeholderText={'Your confirm password'} typeInput={'password'} isRequired={true}/>
      </div>
      <div className={'flex justify-between items-center text-sm'}>
        <UICheckbox register={register} title={'Remember me'}/>
      </div>
      <div>
        <UIButton title={'Sign up'} isSubmit={true}/>
      </div>
    </form>
  );
};

export default SignUp;