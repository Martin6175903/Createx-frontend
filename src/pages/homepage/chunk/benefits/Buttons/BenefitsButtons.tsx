import BenefitsButton from '@/pages/homepage/chunk/benefits/Buttons/BenefitsButton.tsx';
import { useState } from 'react';

const BenefitsButtons = () => {

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const buttonsInfo = [
    {
      title: 'Experienced Tutors'
    },
    {
      title: 'Feedback & Support'
    },
    {
      title: '24/7 Online Library'
    },
    {
      title: 'Community'
    }
  ]

  return (
    <div className={'grid grid-cols-4 mt-10 mb-15'}>
      {buttonsInfo.map((button, index) => (
        <BenefitsButton title={button.title} id={index} key={index} activeButtonIndex={activeButtonIndex} setActiveButtonIndex={setActiveButtonIndex}/>
      ))}
    </div>
  );
};

export default BenefitsButtons;