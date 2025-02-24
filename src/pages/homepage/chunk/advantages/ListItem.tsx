import { CircleCheckBig } from 'lucide-react';

const ListItem = ({title}: {title: string}) => {
  return (
    <li className={'flex'}>
      <div>
        <CircleCheckBig className={'text-primary mr-4 mt-1.5'} size={16}/>
      </div>
      <span className={'text-base leading-[1.6] text-gray-800'}>{title}</span>
    </li>
  );
};

export default ListItem;