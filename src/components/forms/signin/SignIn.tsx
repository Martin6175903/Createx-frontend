import UILabel from '@/UI/form/label/UILabel.tsx';
import UIInput from '@/UI/form/input/UIInput.tsx';
import UICheckbox from '@/UI/form/checkbox/UICheckbox.tsx';
import { Link } from 'react-router-dom';
import UIButton from '@/UI/form/button/UIButton.tsx';

const SignIn = () => {

  return (
    <form action="#" className={'flex flex-col gap-5'}>
      <div>
        <UILabel title={'Email'}/>
        <UIInput placeholderText={'Your working email'} typeInput={'email'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput placeholderText={'Your working password'} typeInput={'password'} isRequired={true}/>
      </div>
      <div className={'flex justify-between items-center text-sm'}>
        <UICheckbox title={'Keep me signed in'}/>
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