import React from 'react';
import githubIcon from '/githubicon.png';
import linkIcon from '/linkicon.png';

const ProjectItems = ({ projects }) => {
  return projects.map((project) => {
    const { id, title, img, desc, code, demo } = project;
    return (
      <div
        className='flex items-center flex-wrap shadow-[0_0_3px_#9A688F] mb-10 py-6 mx-6 bg-gradient-to-b from-[#231933] to-[#120B1C] '
        key={id}
      >
        <div className='max-w-[500px] mx-auto px-1'>
          <img
            className='w-full bg-clip-content'
            src={img}
            alt='project image'
          />
        </div>
        <div className='mx-auto px-1'>
          <h3 className='text-center text-[#9A688F] text-2xl my-2'>{title}</h3>
          <p className='max-w-sm text-center mx-auto px-1'>{desc}</p>
          <div className='bg-[#231933] flex max-w-sm mx-auto mt-6 py-2 shadow-[0_0_3px_#9A688F]'>
            <a target='_blank' href={code} className='linksBtns'>
              Code{' '}
              <img className='w-8 mx-auto' src={githubIcon} alt='github icon' />
            </a>

            <a target='_blank' href={demo} className='linksBtns'>
              Demo{' '}
              <img className='w-10 mx-auto' src={linkIcon} alt='link icon' />
            </a>
          </div>
        </div>
      </div>
    );
  });
};

export default ProjectItems;
