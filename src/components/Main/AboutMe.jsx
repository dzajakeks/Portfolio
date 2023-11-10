import React from 'react';
import aboutSvg from '../../../public/about-svg.svg';
import ScrollingAbout from '../Header/ScrollingText';

const AboutMe = () => {
  return (
    <>
      <div className='flex-row md:flex items-center justify-between py-10'>
        <div className='mx-2'>
          <h2 className='text-3xl pb-2 text-center md:text-left pl-2'>
            About Me
          </h2>
          <div className='max-w-[650px] mx-auto drop-shadow-[0_0_3px_#9A688F] bg-gradient-to-b from-[#231933] to-[#120B1C] '>
            <ScrollingAbout />
          </div>
        </div>
        <div className='max-w-md pt-4 mx-auto '>
          <img className='px-2' src={aboutSvg} alt='About me Svg' />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
