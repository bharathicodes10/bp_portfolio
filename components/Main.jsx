import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typical from 'react-typical';
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center animate-fade-in-down'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm  tracking-widest text-yellow-300 italic'>
            NEVER STOP LEARNING
          </p>
          <h1 className='py-4 text-cyan-500'>
            Hi, I&#39;m <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'> 
            Bharathi Priya</span>
          </h1>
          <h1 className='py-2 text-yellow-300'>
          <Typical
             steps={[
                  'A web developer',
                  3000,
                  'A Full-stack Developer',
                  3000,
                  'UI/UX Developer',
                  3000,
                ]}
                wrapper="p"
                loop={Infinity}
        />
           </h1>
          <p className='py-4 text-white-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating with back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/bharathi-priya-r-5294391b2/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/bharathicodes10'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='https://drive.google.com/file/d/1pVpsUGkYA63oheEaAMpIiS_gF67Unf1s/view?usp=share_link'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
