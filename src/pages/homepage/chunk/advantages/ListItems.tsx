import ListItem from '@/pages/homepage/chunk/advantages/ListItem.tsx';

const ListItems = () => {
  return (
    <ul className={'flex flex-col gap-3 mt-10 mb-12'}>
      <ListItem title={'A fermentum in morbi pretium aliquam adipiscing donec tempus.'}/>
      <ListItem title={'Vulputate placerat amet pulvinar lorem nisl.'}/>
      <ListItem title={'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.'}/>
      <ListItem title={'Etiam duis lobortis in fames ultrices commodo nibh.'}/>
      <ListItem title={'Tincidunt sagittis neque sem ac eget.'}/>
      <ListItem title={'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.'}/>
    </ul>
  );
};

export default ListItems;