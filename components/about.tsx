'use client';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8  scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm{' '}
        <span className="font-bold text-gray-800 dark:text-gray-50">
          Marko Gilić
        </span>
        , a{' '}
        <span className="font-bold text-gray-800 dark:text-gray-50">
          passionate web developer
        </span>{' '}
        hailing from Belgrade. With a love for clean code, pixel-perfect design,
        and seamless user experiences, I thrive in the dynamic world of web
        development.
      </p>
      <p className="mb-3">
        As a web developer, my mission is to transform ideas into interactive
        and visually stunning digital experiences. Whether it's crafting
        responsive websites, developing robust web applications, or optimizing
        user interfaces, I am dedicated to delivering solutions that not only
        meet but exceed expectations.
      </p>
      <p className="mb-3">
        In my toolkit, you'll find proficiency in
        <span className="font-bold text-gray-800 dark:text-gray-50">
          {' '}
          HTML, CSS, and JavaScript,
        </span>
        expertise in React nad NextJS. I'm always exploring new technologies to
        stay at the forefront of the ever-evolving web landscape. I'm fascinated
        by the intersection of creativity and technology. Web development allows
        me to blend these two worlds seamlessly, creating online environments
        that are not only functional but also visually captivating. The ability
        to solve problems and make a positive impact through code is what keeps
        me motivated every day.
      </p>
    </motion.section>
  );
}
