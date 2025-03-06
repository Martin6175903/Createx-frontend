import { PersonTypes } from '@/types/homepage/team/person.types.ts';


const TeamItem = ({person}: PersonTypes) => {

  const {personImg, name, department} = person;

  return (
    <div>
      <div className={'bg-secondary'}>
        <img src={personImg} alt="Team Person" />
      </div>
      <div className={'text-center'}>
        <h4 className={'mt-4 mb-1 font-bold text-[20px] text-gray-800'}>{name}</h4>
        <p className={'text-base leading-[1.6] text-gray-600'}>{department}</p>
      </div>
    </div>
  );
};

export default TeamItem;