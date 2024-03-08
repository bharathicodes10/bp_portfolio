import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 animate-fade-in-down'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-rose-500'>
            About
          </p>
          <h2 className='py-4'>Who Am I</h2>
          <p className='py-2 text-black-600'>
          Building full stack applications with the newest technologies is my area of expertise. I have a strong desire to learn new technology and see that there are other approaches to completing a task. I can pick up new tech stacks as needed because I am a quick learner. Some of the most important abilities for a developer, in my opinion, are flexibility, quick learning, and problem-solving aptitude. Additionally, I think that a great developer is someone who chooses the right tool for the job rather than sticking to a single language.
          </p>
          <p className='py-2 text-black-600'>
            I have built some web applications in the past few years.In my spare
            time I practice problem solving on hackerrank,leetcode, and codechef. 
          </p>
          <button className='p-5'> <a href='https://drive.google.com/file/d/1pVpsUGkYA63oheEaAMpIiS_gF67Unf1s/view?usp=share_link'>See my Resume</a></button>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
