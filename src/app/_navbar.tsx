"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import profile from "./_profile.jpg";
import Image from "next/image";
import Link from "next/link";
import type { MotionValue } from "motion/react";
import React, { useRef, useState } from "react";

const MotionImage = motion.create(Image);
const MotionLink = motion.create(Link);

function Avatar(props: { isScrolled: boolean }) {
  return (
    <MotionImage
      src={profile}
      alt="Ashwin Mahadevan"
      className="rounded-full w-16 h-16 origin-bottom-left"
      animate={{ scale: props.isScrolled ? 0.5 : 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}

/** Crossfade between text "Hi! I'm Ashwin!" and "Ashwin Mahadevan" based on scroll progress */
function Title(props: { progress: MotionValue<number>; isScrolled: boolean }) {
  const greetingTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isGreeting, setIsGreeting] = useState(true);

  useMotionValueEvent(props.progress, "change", (latest) => {
    if (greetingTimeout.current) {
      clearTimeout(greetingTimeout.current);
    }

    greetingTimeout.current = setTimeout(() => {
      setIsGreeting(latest < 0.1);
    }, 1000);
  });

  return (
    <motion.h1
      animate={{
        fontSize: props.isScrolled ? "24px" : "48px",
        translateX: props.isScrolled ? -40 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="font-bold leading-none whitespace-nowrap"
    >
      <AnimatePresence mode="wait">
        {isGreeting ? (
          <motion.span key="greeting" className="inline-flex items-baseline">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              Hi! I'm
            </motion.span>
            &nbsp;
            <motion.span layoutId="ashwin" transition={{ duration: 0.3 }}>
              Ashwin
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              !
            </motion.span>
          </motion.span>
        ) : (
          <motion.span key="name" className="inline-flex items-baseline">
            <motion.span layoutId="ashwin" transition={{ duration: 0.3 }}>
              Ashwin
            </motion.span>
            &nbsp;
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              Mahadevan
            </motion.span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.h1>
  );
}

function MenuItem(props: {
  isScrolled: boolean;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="relative flex flex-col leading-none"
      initial="empty"
      whileHover="filled"
    >
      <MotionLink
        href={props.href}
        animate={{ fontSize: props.isScrolled ? "7px" : "14px" }}
        transition={{ duration: 0.3 }}
      >
        {props.children}
      </MotionLink>
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-white origin-left"
        animate={{
          height: props.isScrolled ? 2 : 4,
          translateY: props.isScrolled ? 2 : 4,
        }}
        variants={{
          empty: { scaleX: 0 },
          filled: { scaleX: 1 },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

function Menu() {
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M7 8h10" />
    <path d="M7 12h10" />
    <path d="M7 16h10" />
  </svg>;
}

export function Navigation() {
  const { scrollYProgress: progress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(progress, "change", (latest) => {
    setIsScrolled(latest >= 0.1);
  });

  return (
    <motion.div
      className="flex items-end justify-between sticky top-0 border-b border-mauve-ui-hover py-4"
      animate={{ height: isScrolled ? 64 : 96 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-end gap-4">
        <Avatar isScrolled={isScrolled} />

        <Title progress={progress} isScrolled={isScrolled} />
      </div>

      <div className="flex flex-col items-end gap-2 justify-around">
        <MenuItem isScrolled={isScrolled} href="/about">
          About
        </MenuItem>
        <MenuItem isScrolled={isScrolled} href="/blog">
          Blog
        </MenuItem>
        <MenuItem isScrolled={isScrolled} href="/contact">
          Contact
        </MenuItem>
      </div>
    </motion.div>
  );
}
