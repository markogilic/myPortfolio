import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import kondoras from '@/public/kondoras.png';
import torte from '@/public/torte.png';
import bfs_company from '@/public/bfs_company.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },

  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    companyName: 'BFS Comapny',
    title: 'Web Developer and Consultant',
    location: 'Belgrade, Serbia',
    description: 'Development and maintenance of web application',
    icon: React.createElement(LuGraduationCap),
    date: 'June 2023 - present',
  },
  {
    companyName: 'Wyer',
    title: 'Front-End Developer',
    location: 'Belgrade, Serbia',
    description:
      'Worked on a team of 5 to develop a web application for a client. I was responsible for the front-end development using React and Tailwind CSS. I also worked on the back-end using Node.js and MongoDB.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2022 - Dec 2022',
  },
  {
    companyName: 'Volt-Bank',
    title: 'Intern - Web Developer',
    location: 'Remote',
    description:
      'Assist in Front-End Development: Work closely with the development team to contribute to the creation and maintenance of responsive and visually appealing user interfaces using HTML, CSS, and JavaScript.',
    icon: React.createElement(FaReact),
    date: 'Avg 2020  - Jan 2022',
  },
] as const;

export const projectsData = [
  {
    title: 'BFS Company',
    description:
      'Created a complete web application in HTML, CSS, React, Framer Motion',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Framer Motion'],
    imageUrl: bfs_company,
    url: 'https://bfscompany.rs',
  },
  {
    title: 'Kondoras',
    description: 'Developed a full front-end e-commerce web application ',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    imageUrl: kondoras,
    url: 'https://kondoras.rs',
  },
  {
    title: 'Torte',
    description:
      'Online ckake ordering web application with a complete front-end and back-end development',
    tags: ['HTML', 'NextJS', 'Tailwind', 'Framer'],
    imageUrl: torte,
    url: 'https://torta.rs',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'jQuery',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Mongoose',
  'Shadcn UI',

  'Framer Motion',
] as const;
