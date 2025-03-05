import { useEffect, useState } from 'react';

interface ISVGHandlerProps {
  children: JSX.Element
  hoverBG?: string
}

const SvgHandler = ({ children, hoverBG }: ISVGHandlerProps) => {

  const [hoverColor, setHoverColor] = useState('');

  useEffect(() => {
    if (hoverBG === 'primary') {
      setHoverColor('hover:[&_path]:fill-primary');
    }
    if (hoverBG === 'red-300') {
      setHoverColor('hover:[&_path]:fill-red-300');
    }
    if (hoverBG === 'white') {
      setHoverColor('hover:[&_path]:fill-white');
    }
  }, [hoverColor]);

  return (
    <div className={`${hoverColor} [&_path]:duration-300 cursor-pointer`}>
      {children}

    </div>
  );
};

export default SvgHandler;