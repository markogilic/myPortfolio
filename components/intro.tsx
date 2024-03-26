'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import marko_gilic from '@/public/marko_gilic.jpg';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'tween', duration: 0.2 }}
        >
          <Image
            src={marko_gilic}
            alt="portfolio image"
            quality="95"
            priority={true}
            className="h-36 w-36 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
        </motion.div>
      </div>
      {/* headline */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl text-center  !leading-[1.5] sm:text-2xl dark:text-gray-300 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold dark:text-gray-50">Hello, I'm Marko.</span>
        I'm a
        <span className="font-bold dark:text-gray-50">
          {' '}
          Frontend web developer{' '}
        </span>{' '}
        with several years of experience in building websites and web
        applications. <br /> My focus is{' '}
        <span className="font-bold dark:text-gray-50">
          JavaScript,React and Next.js.
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-l font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all group "
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className=" group bg-white px-7  py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition-all border  border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/marko-gilic-b9506810b/"
          target="_blank"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-gary-700 outline-none focus:scale-110 hover:scale-110  active:scale-105 transition-all border  border-black/10 dark:bg-white/10 dark:text-white"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/markogilic"
          target="_blank"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-gary-700 outline-none focus:scale-110 hover:scale-110  active:scale-105 transition-all border  border-black/10  dark:bg-white/10 dark:text-white"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
