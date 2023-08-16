import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const myProfile = () => {
  return (
    <>
      <Head>
        <title>Bharathi priya | MyProfile</title>
        <meta
          name='description'
          content='I’m a full stack developer who is also into ML specializing in building web apps and learning data analytics'
        />
        <link rel='icon' href='/bplogo1.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>MyProfile</h2>
        <div className='bg-gradient-to-r from-rose-200 to-pink-500 my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center text-black'>Bharathi Priya R</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/bharathi-priya-r-5294391b2'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/bharathicodes10'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Full stack Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Full stack Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
         An individual with a keen interest in Software programs,
         possessing good interpersonal and analytical skills, who wish to
         use technical knowledge catering to the needs of the company.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
        
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Workshop attended
        </h5>
        {/* Experience */}


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              STEP workshop by Sirius Computer Solutions
            </span>
            <span className='px-2'>|</span>Kongu Engineering College, Erode
          </p>
          <p className='py-1 italic'>3 days workshop on front end web development</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2022 I attended “STEP workshop”, a workshop by Sirius software solutions on web development, specifically
              front-end development, which was a great learning experience.
            </li>
            <li>
              HTML, CSS, Javascript, ReactJS were taught.
            </li>
          </ul>
        </div>

        {/*  */}
        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5> */}
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Kongu Engineering College</span>
            <span className='px-2'>|Perundurai,Erode</span>
          </p>
          <p className='py-1 italic'>Academic Excellence</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              With a CGPA of 9.39 I have secured academic excellence award many times.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default myProfile;
