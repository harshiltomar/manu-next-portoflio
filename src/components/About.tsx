"use client";
import React from 'react';
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/me/5.jpeg",
    "/images/me/3.jpeg",
    "/images/me/6.jpeg",
    "/images/me/7.jpeg",

  ];

  return (
    <div className="container mx-auto px-4">    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <Paragraph className="mt-4">
          Hello there! I&apos;m Harshil Tomar, a passionate developer, avid reader, and design enthusiast. Welcome to my digital world!
        </Paragraph>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Professional Journey</h2>
        <ul className="list-disc pl-5 mb-4 text-sm lg:text-base font-normal text-secondary">
          <li><strong>Current:</strong> Remote SDE-1 at @hifivehq (Techstar &apos;23)</li>
          <li><strong>Previous Roles:</strong>
            <ul className="list-circle pl-5 ">
              <li>- SDE Intern @NewGen Software</li>
              <li>- Fullstack Dev at @Infiniti Solutions</li>
              <li>- Frontend Engineer @Spotline, USA (Remote)</li>
              <li>- Freelance UI/UX Designer @Fiverr</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Expertise</h2>
        <Paragraph className="mb-4">
          From the early days of my career, I&apos;ve been captivated by crafting exceptional digital experiences. As a freelancer, I specialized in transforming client ideas into functional and elegant UI designs. My goal extends beyond creating software; I aim to build actionable marvels that seamlessly merge experience and function.
        </Paragraph>
        <Paragraph className="mb-4">
          My journey spans UI/UX Design, Coding, and Writing. I weave words to inform, entertain, and inspire, unraveling complex concepts and igniting imagination through creative design.
        </Paragraph>
        <Paragraph className="mb-4">
          Currently building <a className="text-blue-500 hover:underline" href="https://chromewebstore.google.com/detail/quick-score-live-score-an/igbedijjdbkpodndbnhdbhngogjdakni">@QuickScore ✨</a> 
        </Paragraph>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Tech Stack</h2>
        <ul className="list-disc pl-5 mb-4 text-sm lg:text-base font-normal text-secondary">
          <li><strong>Languages:</strong> C++, JavaScript, Java</li>
          <li><strong>Backend:</strong> Express.js, Node.js, Backend Typescript</li>
          <li><strong>Frontend:</strong> HTML, CSS, React.js, Typescript, Next.js, Tailwind, Aceternity UI, Axios</li>
          <li><strong>Database:</strong> Firebase, MySQL, MongoDB, Prisma, PostGreSQL, GraphQL</li>
          <li><strong>Version Control:</strong> Git, GitHub, Docker</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Let&apos;s Connect!</h2>
        <Paragraph className="mb-4">
          I&apos;m always open to collaboration and excited about working with other developers on meaningful projects.
        </Paragraph>
        <ul className="list-disc pl-5 mb-4">
          <li>LinkedIn: <a href="https://www.linkedin.com/in/harshiltomar" className="text-blue-500 hover:underline">@linkedIn/harshiltomar</a></li>
          <li>Twitter: <a href="https://twitter.com/hartdrawss" className="text-blue-500 hover:underline">@twitter/hartdrawss</a></li>
        </ul>

        <Paragraph className="mt-4">
          Join me on this journey of bytes and narratives, logic and creativity, code and prose. Together, we can explore the boundless possibilities of technology and storytelling while reveling in the sheer beauty of thoughtful design.
        </Paragraph>
      </div>
    </div>
  );
}