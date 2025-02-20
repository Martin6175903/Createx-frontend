import StatisticsInfo from '@/pages/homepage/chunk/studying/statistics/StatisticsInfo.tsx';
import StatisticsListItem from '@/pages/homepage/chunk/studying/statistics/StatisticsListItem.tsx';

const Statistics = () => {
  return (
    <div className={'info__box pt-[189px] pb-[82px] flex items-center justify-evenly'}>
      <StatisticsInfo quantity={1200} title={'Students graduated'}/>
      <StatisticsListItem/>
      <StatisticsInfo quantity={84} title={'Completed courses'}/>
      <StatisticsListItem/>
      <StatisticsInfo quantity={16} title={'Qualified tutors'}/>
      <StatisticsListItem/>
      <StatisticsInfo quantity={5} title={'Years of experience'}/>
    </div>
  );
};

export default Statistics;