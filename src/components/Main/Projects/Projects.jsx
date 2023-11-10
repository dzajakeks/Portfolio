import React, { useState } from 'react';
import chatImageSpeechImg from '/chat-image-speechImg.png';
import githubdataImg from '/github-profiles-dataImg.png';
import colorGameImg from '/color-game-slideImg.png';
import tailwindTodoImg from '/todo-tailwindImg.png';
import ProjectItems from './ProjectItems';
import ProjButtons from './ProjButtons';
const projectsList = [
  {
    id: 1,
    title: 'GithubUsers Data',
    name: 'GithubUsersData',
    img: githubdataImg,
    desc: 'Github Profiles is a data based platform that allows users to use the better UI. Search followers, visually check stars, repos and other useful data.',
    code: 'https://github.com/dzajakeks/github-users-data',
    demo: 'https://github-profiles-data.netlify.app/',
  },
  {
    id: 2,
    title: 'ChatImageSpeech',
    name: 'ChatImgSpeech',
    img: chatImageSpeechImg,
    desc: 'Text only with ChatGPT. Three most spoken languages in the world (added my native). Extraction of the text from images. Accepting the most popular formats.',
    code: 'https://github.com/dzajakeks/chat-image-speechText',
    demo: 'https://chat-image-speech.netlify.app/',
  },

  {
    id: 3,
    title: 'Color Game',
    name: 'ColorGame',
    img: colorGameImg,
    desc: 'Page with 2 color sliders, design is not the main part, but functionality through which the user can have fun guessing the random color on every refresh.',
    code: 'https://github.com/dzajakeks/color-game',
    demo: 'https://color-game-slide.netlify.app/',
  },
  {
    id: 4,
    title: 'Tailwind Todo',
    name: 'TailwindTodo',
    img: tailwindTodoImg,
    desc: 'Tailwind Todo, with the number of tasks completed, time and date of the created task, stored in a LocalStorage. The rest is like the every other, can edit and delete.',
    code: 'https://github.com/dzajakeks/tailwind-todo',
    demo: 'https://todo-tailwind-app.netlify.app/',
  },
];
const projectBtns = ['all', ...projectsList.map((item) => item.name)];

const Projects = () => {
  const [projects, setProjects] = useState(projectsList);
  const [projBtns, setProjBtns] = useState(projectBtns);

  function filterProjects(name) {
    if (name === 'all') {
      setProjects(projectsList);
      return;
    }
    const newItems = projectsList.filter((item) => item.name === name);
    setProjects(newItems);
  }

  return (
    <div className='py-10'>
      <h2 className='text-3xl pb-2 text-center md:text-left pl-2'>Projects</h2>
      <div className='shadow-[0_0_1px_#9A688F]'>
        <ProjButtons filterProjects={filterProjects} projBtns={projBtns} />
        <ProjectItems projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
