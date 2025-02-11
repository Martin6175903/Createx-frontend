import { Link } from 'react-router-dom';
import styles from './UILink.module.css';

interface UILinkProps {
  isBg: boolean
  whoElem: string
  link: string
  title: string
}

const UILink = ({ isBg, whoElem, link, title}: UILinkProps) => {

  return (
    <Link to={link} className={`${styles.link} ${whoElem === 'large' ? 'text-base px-10' : (whoElem === 'regular' ? 'text-sm px-8' : 'text-xs px-6')}  ${isBg ? 'bg-primary text-white border-primary hover:bg-hover-bg' : 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white'}`}>
      {title}
    </Link>
  );
};

export default UILink;