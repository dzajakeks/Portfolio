import React, { useState, useRef } from 'react';
import closeSidebar from '/close-sidebar.png';

const Navigation = () => {
  const ref = useRef(null);
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);

  function handleOpenSidebar() {
    setIsOpenHamburger(!isOpenHamburger);
  }

  return (
    <>
      <nav className='hidden sm:block rounded-sm z-50 fixed top-3 left-[50%] -translate-x-[50%] bg-white text-[#1A1423] text-xl'>
        <ul className='font-bold flex'>
          <li className='navLink'>
            <a href='#aboutme'>About</a>
          </li>
          <li className='navLink'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='navLink'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='navLink'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className='block sm:hidden fixed top-3 right-3 z-50 hover:scale-110 duration-150'>
        <button onClick={() => handleOpenSidebar(!isOpenHamburger)}>
          <div className='w-10 h-1 bg-white m-2'></div>
          <div className='w-10 h-1 bg-white m-2'></div>
          <div className='w-10 h-1 bg-white m-2'></div>
        </button>
      </div>

      {/* mobile sidebar */}
      <div
        className={` ${
          isOpenHamburger ? 'translate-x-0' : '-translate-x-full'
        } bg-[#231933] fixed top-0 left-0 right-0 bottom-0 z-[9999] duration-300`}
      >
        <ul className='font-bold grid place-content-center h-screen text-center'>
          <li className='my-5'>
            <a
              onClick={() => handleOpenSidebar()}
              ref={ref}
              className='closeSidebarLink'
              href='#aboutme'
            >
              About
            </a>
          </li>
          <li className='my-5'>
            <a
              onClick={() => handleOpenSidebar()}
              className='closeSidebarLink'
              href='#skills'
            >
              Skills
            </a>
          </li>
          <li className='my-5'>
            <a
              onClick={() => handleOpenSidebar()}
              className='closeSidebarLink'
              href='#projects'
            >
              Projects
            </a>
          </li>
          <li className='my-5'>
            <a
              onClick={() => handleOpenSidebar()}
              className='closeSidebarLink'
              href='#contact'
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => handleOpenSidebar()}
          className='fixed top-4 right-4 hover:scale-110 duration-150'
        >
          <img className='w-10 ' src={closeSidebar} alt='close sidenav' />
        </button>
      </div>
    </>
  );
};

export default Navigation;
