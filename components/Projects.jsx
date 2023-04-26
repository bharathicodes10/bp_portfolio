import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/coffee.png';
import cryptoImg from '../public/assets/projects/crypto.png'
import netflixImg from '../public/assets/projects/netflix.png'
import twitchImg from '../public/assets/projects/twitch.png'

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full animate-fade-in-down'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-cyan-500'>
          PROJECTS
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='CoffeeShop'
            backgroundImg={propertyImg}
            projectUrl='/coffee'
            tech='ASP .NET and C#'
          />
          <ProjectItem
            title='Portfolio webApp'
            backgroundImg={cryptoImg}
            projectUrl='/bpportfolio'
            tech='Next JS'

          />
          <ProjectItem
            title='Construction Management Portal'
            backgroundImg={netflixImg}
            projectUrl='/cms'
            tech='MERN Stack'

          />
          <ProjectItem
            title='Online Cosmetics Shop'
            backgroundImg={twitchImg}
            projectUrl='/ocs'
            tech='PHP MYSQL'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
