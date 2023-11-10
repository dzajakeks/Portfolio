import React from 'react';
import HtmlLogo from '/html-logo.png';
import CssLogo from '/css-logo.png';
import JSLogo from '/js-logo.png';
import ReactLogo from '/react-logo.png';
import TailwindLogo from '/tailwind-logo.png';
import ReduxLogo from '/redux-logo.png';

const skills = [
  { skillsImg: HtmlLogo, text: 'HTML', delay: '0s' },
  { skillsImg: CssLogo, text: 'CSS', delay: '2s' },
  { skillsImg: TailwindLogo, text: 'Tailwind', delay: '4s' },
  { skillsImg: JSLogo, text: 'JavaScript', delay: '6s' },
  { skillsImg: ReactLogo, text: 'ReactJS', delay: '8s' },
  { skillsImg: ReduxLogo, text: 'Redux', delay: '10s' },
];

const Skills = () => {
  return (
    <div className='py-10'>
      <h2 className='text-3xl text-center md:text-left pl-2 '>Skills</h2>
      <div className=' flex flex-col justify-start max-w-6xl overflow-hidden shadow-[0_0_3px_#9A688F] py-4  '>
        <div className=' relative h-12'>
          {skills.map((skills, i) => {
            return (
              <div
                style={{ animationDelay: `${skills.delay}` }}
                key={i}
                className='flex items-center justify-center w-48 bg-[#372549]  
              absolute -left-[192px] top-0 animate-[skillsSlide_12s_linear_infinite_reverse] gap-2 h-full'
              >
                <div className='w-7'>
                  <img src={skills.skillsImg} alt='skill img' />
                </div>
                <span className='text-2xl'>{skills.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
