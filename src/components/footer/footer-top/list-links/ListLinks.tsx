import ListLink from '@components/footer/footer-top/list-links/ListLink.tsx';

const ListLinks = ({children, title}: {title: string}) => {
  return (
    <div>
      <h4 className={'font-bold text-base tracking-wider uppercase'}>{title}</h4>
      {children}
    </div>
  );
};

export default ListLinks;