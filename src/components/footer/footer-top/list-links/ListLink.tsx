import { Link } from 'react-router-dom';

const ListLink = ({title, link}: { title: string, link: string }) => {
  return (
    <li className={'group/edit'}><Link to={link} className={'group-hover/edit:underline group-hover/edit:text-white  duration-300'}>{title}</Link></li>
  );
};

export default ListLink;