import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/codeai.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const codeai = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>CodeAI</h2>
          <h3>JS / Vite / OpenAI</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
           This app is built using Vite and OpenAI. OpenAI is a open ended platform for
           people who wants to explore AI and ML models. The recent creation of OpenAI, a
           chat GPT is an intelligent AI chatbot which can help you in any field.
           CodeAI is a chat GPT which can explain any complex piece of code in a simple way,
           can write code in given languages and can also test you.
          </p>
          <a
            href='https://github.com/bharathicodes10/codeAI'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://code-ai-jet.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vite
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenAI
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <button classname="w-2 h-4 text-pink"><p className='underline cursor-pointer'>Back</p></button>
        </Link>
      </div>
    </div>
  );
};

export default codeai;
