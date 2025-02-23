import { Link } from 'react-router-dom';

const ListLink = ({title, link}: { title: string, link: string }) => {
  return (
    <li><Link to={link}>{title}</Link></li>
  );
};

export default ListLink;