import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-full'
            src='https://drive.google.com/uc?id=1Jlmh0159cSM4BW5WhbmXUDBk4s9EokqG'
            width={50}
            height={50}
            alt='logo'
          />
        </Link>
        <h1>Джаред</h1>
      </div>
      <div>
        <Link
          href='https://yeldynov-dev.netlify.com'
          target='_blank'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center '
        >
          Підпишись щоб отримувати цікаві листи! 🤓
        </Link>
      </div>
    </header>
  );
};

export default Header;
