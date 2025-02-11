interface UILabelProps {
  title: string
}

const UILabel = ({title}: UILabelProps) => {
  return (
    <label className='inline-block mb-2 text-sm text-gray-800'>
      {title}
    </label>
  );
};

export default UILabel;