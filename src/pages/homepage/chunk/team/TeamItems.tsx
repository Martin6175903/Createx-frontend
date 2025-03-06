import TeamPerson1 from '@public/homepage/team/person-1.png';
import TeamPerson2 from '@public/homepage/team/person-2.png';
import TeamPerson3 from '@public/homepage/team/person-3.png';
import TeamPerson4 from '@public/homepage/team/person-4.png';
import TeamItem from '@/pages/homepage/chunk/team/TeamItem.tsx';

const TeamItems = () => {

  const itemsInfo = [
    {
      personImg: TeamPerson1,
      name: 'Dianne Russell',
      department: 'Founder and CEO'
    },
    {
      personImg: TeamPerson2,
      name: 'Jerome Bell',
      department: 'Founder and Program Director'
    },
    {
      personImg: TeamPerson3,
      name: 'Kristin Watson',
      department: 'Marketer, Curator of Marketing Course'
    },
    {
      personImg: TeamPerson4,
      name: 'Marvin McKinney',
      department: 'PM, Curator of Management Course'
    }
  ]

  return (
    <div className={'flex justify-between'}>
      {itemsInfo.map((person, index) => (
        <TeamItem person={person} key={index}/>
      ))}
    </div>
  );
};

export default TeamItems;