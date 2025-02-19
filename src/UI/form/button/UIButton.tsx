import styles from './UIButton.module.css';
import { useLocation } from 'react-router-dom';

interface UIButtonProps {
  title: string
  isSubmit: boolean
  isCompasionPasswords?: boolean
}

const UIButton = ({title, isSubmit, isCompasionPasswords}: UIButtonProps) => {
  const { pathname } = useLocation();
  return (
    <div className={'relative'}>
      <button type={isSubmit ? 'submit' : 'button'} className={`${styles.button} text-base bg-primary text-white border-primary hover:bg-hover-bg`}>
        {title}
      </button>
      {pathname === '/register' && !isCompasionPasswords ?
        <p className={'absolute -top-6 right-0 leading-4 text-red-600 text-sm select-none'}>
          Введённые пароли не совпадают!
        </p>
        : ''
      }
    </div>
  );
};

export default UIButton;