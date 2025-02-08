import SignIn from '@components/forms/signin/SignIn.tsx';
import SignUp from '@components/forms/signup/SignUp.tsx';
import { IModal } from '@/types/modal.types.ts';
import { Dispatch, SetStateAction, useState } from 'react';

interface ModalFormProps {
  modalInfo: IModal
  setModalInfo: Dispatch<SetStateAction<IModal>>
}

const ModalForm = ({modalInfo, setModalInfo}: ModalFormProps) => {

  const [isSignIn, setIsSignIn] = useState(modalInfo.whoOpenModal === 'Sign In');

  const handleCloseModal = () => {
    setModalInfo({...modalInfo, isOpen: false});
  }

  return (
    <div className='bg-white max-w-[486px] w-full rounded'>
      <div className={'p-12 relative'}>
        <div className='absolute right-7 top-7'>
          <button onClick={handleCloseModal} className="modal-close *:w-full *:h-0.5 *:rounded *:bg-gray-700">
            <div className='rotate-45 translate-y-px'></div>
            <div className='-rotate-45 -translate-y-px'></div>
          </button>
        </div>
        <div className='text-center'>
          <h2 className='text-[28px] font-bold'>
            {isSignIn ? 'Sign in' : 'Sign up'}
          </h2>
          <p className='text-sm text-gray-700 my-6'>
            {isSignIn ? 'Sign in to your account using email and password provided during registration.'
              : 'Registration takes less than a minute but gives you full control over your studying.'}
          </p>
        </div>
        {/*{modalInfo.whoOpenModal === 'Sign In' ? <SignIn/> : <SignUp/>}*/}
      </div>
      <div className='h-[1px] bg-gray-300'></div>
      <div className='px-12 py-6 text-center'>
        <p className='mb-4 text-sm text-gray-700'>
          {modalInfo.whoOpenModal === 'Sign In' ? 'Or sign in with' : 'Or sign up with'}
        </p>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default ModalForm;