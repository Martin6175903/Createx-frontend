import { Link } from 'react-router-dom';
import styles from './UILink.module.css';

interface UILinkProps {
  isBg: boolean
  whoElem: string
  link: string
  title: string
  otherProperties?: string
}

const UILink = ({ isBg, whoElem, link, title, otherProperties}: UILinkProps) => {

  return (
    <Link to={link} className={`${styles.link} ${whoElem === 'large' ? 'text-base px-10' : (whoElem === 'regular' ? 'text-sm px-8' : 'text-xs px-6')}  ${isBg ? 'bg-primary text-white border-primary hover:bg-hover-bg' : 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white'} ${otherProperties}`}>
      {title}
    </Link>
  );
};

export default UILink;