import React, { useState, useRef } from 'react';

const LightSwitch = () => {
  const switchRef = useRef();
  const [isOn, setIsOn] = useState(false);

  function handleLight() {
    let mainContent = document.querySelector('#mainContent');
    let bodyCont = document.querySelector('#bodyCont');
    const flyingHuman = document.querySelector('#flyingHuman');
    setIsOn(!isOn);
    flyingHuman.classList.add('animate-[flyingHuman_2400ms_linear_forwards]');
    if (isOn) {
      mainContent.classList.add('hidePageContent');
      mainContent.classList.remove('showPageContent');
    } else {
      mainContent.classList.add('showPageContent');
      mainContent.classList.remove('hidePageContent');
    }

    switchRef.current.classList.toggle('slide');

    bodyCont.classList.toggle('overFlowAuto');
  }

  return (
    <button
      onClick={() => handleLight()}
      className='rounded-lg w-10 h-14 bg-white grid mx-auto mt-4'
    >
      <div className='w-4 h-8 relative border-[1px] border-black top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%]'>
        <span
          ref={switchRef}
          className='h-4 bg-[#774C60] w-full inline-block buttons slide'
        ></span>
      </div>
    </button>
  );
};

export default LightSwitch;
