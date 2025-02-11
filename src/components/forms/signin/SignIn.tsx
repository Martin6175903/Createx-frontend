import UILabel from '@/UI/form/label/UILabel.tsx';
import UIInput from '@/UI/form/input/UIInput.tsx';
import UICheckbox from '@/UI/form/checkbox/UICheckbox.tsx';

const SignIn = () => {

  return (
    <form action="#" className={'flex flex-col gap-5'}>
      <div>
        <UILabel title={'Email'}/>
        <UIInput placeholderText={'Your working email'}/>
      </div>
      <div>
        <UILabel title={'Password'}/>
        <UIInput placeholderText={'Your working password'} isPassword={true}/>
      </div>
      <div>
        <UICheckbox/>
      </div>
    </form>
  );
};

export default SignIn;