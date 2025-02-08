import { useState } from 'react';
import EyeOpenIcon from '@public/icons/eye-open.svg?react';
import EyeCloseIcon from '@public/icons/eye-close.svg?react';

const SignIn = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <form>
      <div>
        <label htmlFor="modal-email">Email</label>
        <input type="email" id="modal-email" placeholder="Your working email"/>
      </div>
      <div>
        <label htmlFor="modal-password">Password</label>
        <input type={isVisiblePassword ? 'text' : 'password'} id="modal-password" placeholder="Your working password"/>
        <button onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
          {isVisiblePassword ? <EyeOpenIcon/> : <EyeCloseIcon/>}
        </button>
      </div>
    </form>
  );
};

export default SignIn;