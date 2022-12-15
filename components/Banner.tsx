import React from 'react';

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-10 mb-10'>
      <div>
        <h1 className='text-6xl'>ДжаредСкрипт Блог</h1>
        <h2 className='mt-5 md:mt-2'>
          Вітаємо{' '}
          <span className='underline decoration-4 decoration-[#f7ab0a]'>
            на улюбленому блог-порталі
          </span>{' '}
          українських веб-розробників
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        Нові продуктові фічі | Останні технології | Свіже переклади та більше!
      </p>
    </div>
  );
};

export default Banner;
