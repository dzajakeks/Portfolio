import React from 'react';
import Typewriter from 'typewriter-effect';

const SelfTyping = () => {
  return (
    <div className='my-2 text-2xl'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.pauseFor(400).typeString('Web Developer').start();
        }}
      />
    </div>
  );
};

export default SelfTyping;
