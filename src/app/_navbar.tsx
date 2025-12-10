"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import profile from "./_profile.jpg";
import Image from "next/image";
import Link from "next/link";
import type { MotionValue } from "motion/react";
import { useRef, useState } from "react";

const MotionImage = motion.create(Image);

function Avatar(props: { progress: MotionValue<number> }) {
  const scale = useTransform(props.progress, [0, 0.1], [1, 0.5]);
  return (
    <MotionImage
      src={profile}
      alt="Ashwin Mahadevan"
      className="rounded-full w-16 h-16 origin-bottom-left"
      style={{ scale }}
    />
  );
}

/** Crossfade between text "Hi! I'm Ashwin!" and "Ashwin Mahadevan" based on scroll progress */
function Title(props: { progress: MotionValue<number> }) {
  const fontSize = useTransform(props.progress, [0, 0.1], ["48px", "24px"]);
  const translateX = useTransform(props.progress, [0, 0.1], [0, -40]);

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
      style={{ fontSize, translateX }}
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
  const height = useTransform(progress, [0, 0.1], [96, 64]);

  return (
    <motion.div
      className="flex items-end justify-between sticky top-0 border-b border-mauve-ui-hover py-4"
      style={{ height }}
    >
      <div className="flex items-end gap-4">
        <Avatar progress={progress} />

        <Title progress={progress} />
      </div>

      <div className="flex flex-col">
        <Link href="/about" className="text-sm">
          About
        </Link>
        <Link href="/blog" className="text-sm">
          Blog
        </Link>
        <Link href="/contact" className="text-sm">
          Contact
        </Link>
      </div>
    </motion.div>
  );
}
