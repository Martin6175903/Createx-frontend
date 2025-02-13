import UILabel from '@/UI/form/label/UILabel.tsx';
import UIInput from '@/UI/form/input/UIInput.tsx';
import UICheckbox from '@/UI/form/checkbox/UICheckbox.tsx';
import UIButton from '@/UI/form/button/UIButton.tsx';

const SignUp = () => {
  return (
    <form action="#" className={'flex flex-col gap-5'}>
      <div>
        <UILabel title={'Full Name'}/>
        <UIInput placeholderText={'Your full name'} typeInput={'text'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Email'}/>
        <UIInput placeholderText={'Your working email'} typeInput={'email'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput placeholderText={'Your working password'} typeInput={'password'} isRequired={true}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput placeholderText={'Your confirm password'} typeInput={'password'} isRequired={true}/>
      </div>
      <div className={'flex justify-between items-center text-sm'}>
        <UICheckbox title={'Remember me'}/>
      </div>
      <div>
        <UIButton title={'Sign up'} isSubmit={true}/>
      </div>
    </form>
  );
};

export default SignUp;