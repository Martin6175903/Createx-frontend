import NavbarLink from '@components/navbar/NavbarLink.tsx';

const Navbar = () => {
  return (
    <nav className={'navbar ml-[60px] flex gap-10'}>
      <NavbarLink link={'about'} title={'About Us'}/>
      <NavbarLink link={'courses'} title={'Courses'}/>
      <NavbarLink link={'events-grid'} title={'Events'}/>
      <NavbarLink link={'blog'} title={'Blog'}/>
      <NavbarLink link={'contacts'} title={'Contacts'}/>
    </nav>
  );
};

export default Navbar;