import React from 'react';
import githubImg from '/githubicon.png';

const Contact = () => {
  return (
    <>
      <h2 className='text-3xl pb-2 text-center md:text-left pl-2'>Contact</h2>
      <div className='flex shadow-[0_0_3px_#9A688F] p-4  bg-gradient-to-b from-[#231933] to-[#120B1C]'>
        <div className='w-full flex flex-wrap items-center justify-around text-center'>
          <p>
            <span className='text-[#774C60]'>Email: </span>{' '}
            <a
              className='hover:text-[#774C60]'
              href='mailto:pmarko.contact@gmail.com'
            >
              pmarko.contact@gmail.com
            </a>
          </p>
          <div className='flex m-4'>
            <span className='text-[#774C60]'>Profiles</span>:
            <a target='_blank' href='https://github.com/dzajakeks'>
              <img
                className='w-9 hover:scale-[1.2]'
                src={githubImg}
                alt='github icon'
              />
            </a>
          </div>
          <p>
            Copyright &copy; {new Date().getFullYear()}. All rights are reserved{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
