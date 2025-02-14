import SignIn from '@components/forms/signin/SignIn.tsx';
import SignUp from '@components/forms/signup/SignUp.tsx';
import { Dispatch, SetStateAction, useState } from 'react';
import SignSocial from '@components/forms/SignSocial.tsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface ModalFormProps {
  isOpenModal: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ModalForm = ({ setIsOpenModal }: ModalFormProps) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsOpenModal(false);
    navigate('/');
  };

  return (
    <div className="bg-white max-w-[486px] w-full rounded">
      <div className={'p-12 relative'}>
        <div className="absolute right-7 top-7">
          <button onClick={handleCloseModal} className="modal-close *:w-full *:h-0.5 *:rounded *:bg-gray-700">
            <div className="rotate-45 translate-y-px"></div>
            <div className="-rotate-45 -translate-y-px"></div>
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-[28px] font-bold">
            {pathname === '/login' ? 'Sign in' : 'Sign up'}
          </h2>
          <p className="text-sm text-gray-700 my-6">
            {pathname === '/login' ? 'Sign in to your account using email and password provided during registration.'
              : 'Registration takes less than a minute but gives you full control over your studying.'}
          </p>
        </div>
        {pathname === '/login' ? <SignIn/> : <SignUp/>}
        <div className={'mt-6 text-sm'}>
          <p>
            {pathname === '/login'
              ? (<>
                  <span>Don't have an account? </span>
                  <Link to={'register'} className={'text-primary hover:underline hover:scale-105'}>Sign up</Link>
                </>)
              : (<>
                  <span>Already have an account? </span>
                  <Link to={'login'} className={'text-primary hover:underline hover:scale-105'}>Sign in</Link>
                </>)
            }
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-gray-300"></div>
      <div className="px-12 py-6 text-center">
        <p className="mb-4 text-sm text-gray-700">
          {pathname === '/login' ? 'Or sign in with' : 'Or sign up with'}
        </p>
        <SignSocial />
      </div>
    </div>
  );
};

export default ModalForm;