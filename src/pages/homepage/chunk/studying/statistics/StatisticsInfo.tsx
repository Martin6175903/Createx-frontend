interface StatisticsInfoProps {
  quantity: number
  title: string
}

const StatisticsInfo = ({quantity, title}: StatisticsInfoProps) => {
  return (
    <div className={'flex gap-3 items-center'}>
      <span className={'font-black text-[46px] leading-[1.3]'}>{quantity}</span>
      <span className={'text-base leading-[1.6]'}>{title}</span>
    </div>
  );
};

export default StatisticsInfo;