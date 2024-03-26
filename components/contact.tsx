'use client';
import React from 'react';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import { useRef } from 'react';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      className="mb-28  sm:mb-40 w-[min(100%,38rem)] text-center scroll-mt-[10rem]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:gilicmarko10@gmail.com">
          gilicmarko10@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Message sent!');
          formRef.current?.reset();
        }}
      >
        <input
          name="senderEmail"
          className="h-14 rounded-lg border border-black/10 px-4 dark:bg-gray-700 dark:focus:bg-gray-600 transition-all dark:text-white dark:placeholder-white dark:outline-none"
          type="email"
          required
          maxLength={100}
          placeholder="Your email address"
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg border border-black/10 p-4 focus:border-black  focus:border-1 active:border-black actove:border-1 dark:bg-gray-700 dark:focus:bg-gray-600 transition-all dark:text-white dark:placeholder-white dark:outline-none"
          required
          maxLength={1000}
          placeholder="Your message."
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
