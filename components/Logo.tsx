import Image from 'next/image';

const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='rounded-full object-cover'
        height={50}
        width={50}
        src={'https://drive.google.com/uc?id=1JChJ9U02XwEOKshxsQ-I733SzjI7KmFz'}
        alt='logo'
      />
      {<>{renderDefault(props)}</>}
    </div>
  );
};

export default Logo;
