import { BenefitsButtonsTypes } from '@/types/homepage/benefits/benefits-buttons.types.ts';
import { FC } from 'react';
import { Layers, MessagesSquare, Star, ThumbsUp } from 'lucide-react';

const BenefitsButton: FC<BenefitsButtonsTypes> = ({title, id, activeButtonIndex, setActiveButtonIndex}) => {
  const handleClick = () => {
    if (activeButtonIndex === id) return false;
    setActiveButtonIndex(id);
  }

  return (
    <button onClick={handleClick} className={`flex gap-2 items-center justify-center border border-solid leading-[1.6] text-base font-bold min-h-[46px] rounded ${activeButtonIndex === id ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}>
      {id === 0 && <Star/>}
      {id === 1 && <ThumbsUp/>}
      {id === 2 && <Layers/>}
      {id === 3 && <MessagesSquare/>}
      <span>{title}</span>
    </button>
  );
};

export default BenefitsButton;