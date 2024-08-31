"use client";

import { Container } from "@/components/Container";
import Experience from "@/components/Experience";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { TechStack } from "@/components/TechStack";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div>
          <Container>
            <span className="text-4xl">👋</span>
            <Heading className="font-black text-black">
              Hello there! I&apos;m Harshil
            </Heading>
            <Paragraph className="max-w-xl mt-4">
              I&apos;m a Full-stack dev that loves{" "}
              <Highlight>building products</Highlight> and web apps that can
              impact millions of lives
            </Paragraph>
            <Paragraph className="max-w-xl mt-4">
              I&apos;m a Software engineer with <Highlight>1+ YOE</Highlight>{" "}
              building scalable web apps that are performance optimized and good
              looking.
            </Paragraph>
            <Heading
              as="h2"
              className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
            >
              My Experience
            </Heading>
            <Experience />
            <TechStack />
          </Container>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
