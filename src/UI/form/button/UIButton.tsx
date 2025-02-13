import styles from './UIButton.module.css';

interface UIButtonProps {
  title: string
  isSubmit: boolean
}

const UIButton = ({title, isSubmit}: UIButtonProps) => {
  return (
    <button type={isSubmit ? 'submit' : 'button'} className={`${styles.button} text-base bg-primary text-white border-primary hover:bg-hover-bg`}>
      {title}
    </button>
  );
};

export default UIButton;