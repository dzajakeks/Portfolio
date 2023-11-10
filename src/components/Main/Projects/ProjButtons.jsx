import React from 'react';

const ProjButtons = ({ projBtns, filterProjects }) => {
  return (
    <div className=' py-3 flex items-center flex-col sm:flex-row flex-wrap justify-center'>
      {projBtns.map((btn, i) => {
        return (
          <button
            onClick={() => {
              filterProjects(btn);
            }}
            className='bg-[#372549] m-2 w-fit px-3 py-1 rounded-sm hover:bg-[#774C60]'
            type='button'
            key={i}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default ProjButtons;
