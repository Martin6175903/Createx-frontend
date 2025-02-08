import { Link } from 'react-router-dom';

interface UILinkProps {
  isBg: boolean
  paddingHorizontal: number
  link: string
  title: string
}

const UILink = ({ isBg, paddingHorizontal, link, title}: UILinkProps) => {

  const paddingHorizontalElem = 'px-' + paddingHorizontal;

  return (
    <Link to={link} className={`inline-block text-center rounded py-4 ${paddingHorizontalElem} font-bold tracking-wide border border-solid ${isBg ? 'bg-primary text-white hover:hover-bg' : 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white'} duration-200`}>
      {title}
    </Link>
  );
};

export default UILink;