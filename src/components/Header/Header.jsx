import React from 'react';
import SelfTyping from './SelfTyping';
import LightSwitch from './LightSwitch';
import flyingSvg from '../../../public/flyingHuman.svg';

const Header = () => {
  return (
    <header className='pt-32 relative'>
      <h1 className='text-5xl animate-[slideInText_1.2s_ease-in-out]'>
        Hello, <br /> I'm Marko
      </h1>
      <SelfTyping />
      <p className='text-[#9A688F]'>
        Let's explore, <br /> Flip the switch to begin
      </p>

      <LightSwitch />
      <img
        id='flyingHuman'
        className='w-20 rotate-45 fixed top-12 opacity-0'
        src={flyingSvg}
        draggable={false}
        alt='flying person svg'
      />
    </header>
  );
};

export default Header;
