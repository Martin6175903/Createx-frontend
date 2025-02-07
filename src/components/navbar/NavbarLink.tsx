import { Link, useLocation } from 'react-router-dom';

interface NavbarLinkProps {
  title: string
  link: string
}

const NavbarLink = ({title, link}: NavbarLinkProps) => {
  const location = useLocation();

  return (
    <Link to={link} className={`font-bold leading-[1.6] ${`/${link}` === location.pathname ? 'text-primary' : 'text-gray-800'}`}>
      {title}
    </Link>
  );
};

export default NavbarLink;