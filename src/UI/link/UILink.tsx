import { Link } from 'react-router-dom';

interface UILinkProps {
  isBg: boolean
  paddingHorizontal: number
  link: string
  title: string
}

const UILink = ({ isBg, paddingHorizontal, link, title}: UILinkProps) => {

  const paddingHorizontalElem = `px-${paddingHorizontal}`;

  return (
    <Link to={link} className={`inline-block text-center rounded py-4 ${paddingHorizontalElem} font-bold tracking-wide border border-solid border-transparent ${isBg ? 'bg-primary text-white' : 'bg-transparent border-primary text-primary'}`}>
      {title}
    </Link>
  );
};

export default UILink;