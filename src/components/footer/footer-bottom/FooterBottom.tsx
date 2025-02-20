import SVGHandler from '@/utilities/SVGHandler.tsx';
import HeartIcon from '@public/icons/heart.svg?react';
import { useState } from 'react';

const FooterBottom = () => {
  const [hoverElem, setHoverElem] = useState(false);

  const handleOverMouse = () => {
    setHoverElem(true);
    console.log(true);
  }

  const handleOutMouse = () => {
    setHoverElem(false);
    console.log(false);
  }

  return (
    <div className={'py-5 bg-[rgb(41,44,55)]'}>
      <div className="container">
        <div className={'flex items-center justify-between'}>
          <div className={'flex gap-0.5 group/edit'} onMouseEnter={handleOverMouse} onMouseLeave={handleOutMouse}>
            <div>
              &copy; All rights reserved.
            </div>
            <div className={'flex gap-1 items-center'}>
              <p>Made with</p>
              <span>
                {hoverElem
                  ? <SVGHandler hoverBG={'red-300'}><HeartIcon /></SVGHandler>
                  : <SVGHandler><HeartIcon /></SVGHandler>
                }
              </span>
              <p>by Createx Studio</p>
            </div>
          </div>
          <div>
            <button onClick={() => window.scrollTo(0,0)} className={'text-sublink hover:text-gray-300 duration-300 text-sm'}>GO TO TOP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;