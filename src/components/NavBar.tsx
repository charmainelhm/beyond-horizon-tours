"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import closeIcon from "../../public/assets/shared/icon-close.svg";
import hamburgerIcon from "../../public/assets/shared/icon-hamburger.svg";
import { motion } from "framer-motion";

const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "/destination" },
    { name: "Crew", path: "/crew" },
    { name: "Technology", path: "/technology" },
  ];
  const currentPage = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !navMenu.current?.contains(event.target)
      )
        setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", clickHandler);

    return () => document.removeEventListener("mousedown", clickHandler);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 20 }}
      className="fixed z-30 inset-x-0 max-sm:w-11/12 max-sm:mx-auto flex justify-between items-center sm:pl-10 lg:pl-14 max-sm:pt-5 lg:pt-10"
    >
      <Link className="relative aspect-square h-10 sm:h-12" href="/">
        <Image src="/assets/shared/logo.svg" alt="Space Tourism Logo" fill />
      </Link>
      <div className="hidden lg:block relative z-[60] grow h-px bg-white/20 translate-x-8"></div>
      <button className="sm:hidden" onClick={() => setIsMenuOpen(true)}>
        <Image src={hamburgerIcon} alt="Open menu" />
      </button>
      <nav
        ref={navMenu}
        className={`transition ${
          isMenuOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"
        } max-sm:fixed z-50 max-sm:right-0 max-sm:top-0 max-sm:w-3/4 lg:w-3/5 max-sm:h-screen max-sm:overflow-y-scroll bg-white/10 backdrop-blur-lg px-8 max-sm:py-8 sm:px-12 lg:px-[min(5vw,7rem)]`}
      >
        <button
          className="flex ml-auto sm:hidden mb-16"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <Image src={closeIcon} alt="Close menu" />
        </button>
        <ul className="flex max-sm:flex-col gap-y-8 sm:gap-x-[min(4.6vw,2.25rem)] lg:gap-x-12">
          {navItems.map((navItem, index) => (
            <li key={navItem.name} className={`relative`}>
              {currentPage === navItem.path && (
                <motion.div
                  layoutId="active-navItem"
                  className="hidden sm:block absolute inset-0 sm:border-b-[0.1875rem] border-white"
                ></motion.div>
              )}
              <Link
                href={navItem.path}
                className="relative inline-block sm:border-b-[0.1875rem] border-transparent hover:border-white/50 focus-within:border-white/50 sm:py-10 text-white font-barlowCondensed uppercase tracking-[0.15em] space-x-3"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <span className="inline-block font-bold sm:max-lg:hidden">
                  {index.toString().padStart(2, "0")}
                </span>
                <span>{navItem.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default NavBar;
