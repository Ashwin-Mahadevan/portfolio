"use client";

import type { ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import profile from "./_profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const MotionImage = motion.create(Image);
const MotionLink = motion.create(Link);

/** Crossfade between text "Hi! I'm Ashwin!" and "Ashwin Mahadevan" based on scroll progress */
function Title(props: { isScrolled: boolean }) {
  return (
    <motion.h1
      animate={{
        fontSize: props.isScrolled ? "24px" : "48px",
        translateX: props.isScrolled ? -40 : 0,
      }}
      className="font-bold leading-none whitespace-nowrap"
    >
      <AnimatePresence mode="wait">
        {!props.isScrolled ? (
          <motion.span key="greeting" className="inline-flex items-baseline">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Hi! I'm
            </motion.span>
            &nbsp;
            <motion.span layoutId="ashwin">Ashwin</motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              !
            </motion.span>
          </motion.span>
        ) : (
          <motion.span key="name" className="inline-flex items-baseline">
            <motion.span layoutId="ashwin">Ashwin</motion.span>
            &nbsp;
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
  children: ReactNode;
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
      >
        {props.children}
      </MotionLink>
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-white origin-right"
        animate={{
          height: props.isScrolled ? 2 : 4,
          translateY: props.isScrolled ? 2 : 4,
        }}
        variants={{
          empty: { scaleX: 0 },
          filled: { scaleX: 1 },
        }}
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled((isScrolled) => {
      const threshold = isScrolled ? 64 : 96;
      return latest > threshold;
    });
  });

  const isGreeting = isHome && !isScrolled;

  return (
    <Fragment>
      <motion.div
        className="flex items-end justify-between sticky top-0 border-b border-mauve-ui-hover py-4"
        animate={{ height: isGreeting ? 96 : 64 }}
      >
        <div className="flex items-end gap-4">
          <MotionImage
            src={profile}
            alt="Ashwin Mahadevan"
            className="rounded-full w-16 h-16 origin-bottom-left"
            animate={{ scale: isGreeting ? 1 : 0.5 }}
          />

          <Title isScrolled={!isGreeting} />
        </div>

        <div className="flex flex-col items-end gap-2 justify-around">
          <MenuItem isScrolled={!isGreeting} href="/about">
            About
          </MenuItem>
          <MenuItem isScrolled={!isGreeting} href="/blog">
            Blog
          </MenuItem>
          <MenuItem isScrolled={!isGreeting} href="/contact">
            Contact
          </MenuItem>
        </div>
      </motion.div>
    </Fragment>
  );
}
