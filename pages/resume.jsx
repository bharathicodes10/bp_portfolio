import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Bharathi priya | Resume</title>
        <meta
          name='description'
          content='I’m a full stack developer who is also into ML specializing in building web apps and data analysis'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Bharathi Priya R</h2>
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
              STEP workshop by Sirius software solutions
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
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default resume;
