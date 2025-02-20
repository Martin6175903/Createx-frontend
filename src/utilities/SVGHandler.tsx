import { useState } from 'react';

interface ISVGHandlerProps {
  children: JSX.Element
  hoverBG?: string
}

const SvgHandler = ({ children, hoverBG }: ISVGHandlerProps) => {

  const [hoverColor, setHoverColor] = useState(hoverBG ? `hover:[&_path]:fill-${hoverBG}` : '');

  return (
    <div className={`${hoverColor && hoverColor} [&_path]:duration-300 cursor-pointer`}>
      {children}
    </div>
  );
};

export default SvgHandler;