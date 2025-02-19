const SocialItem = ({children}: {children: JSX.Element}) => {
  return (
    <button className={'hover:[&_path]:fill-primary [&_path]:duration-300'}>
      {children}
    </button>
  );
};

export default SocialItem;