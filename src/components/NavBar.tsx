"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "/destination" },
    { name: "Crew", path: "/crew" },
    { name: "Technology", path: "/technology" },
  ];

  const currentPage = usePathname();
  return (
    <div className="fixed inset-x-0 z-30 flex justify-between items-center sm:pl-10 lg:pl-14 lg:pt-10">
      <Link className="relative aspect-square h-12" href="/">
        <Image src="/assets/shared/logo.svg" alt="Space Tourism Logo" fill />
      </Link>
      <div className="hidden lg:block relative z-40 grow h-px bg-white/20 translate-x-8"></div>
      <nav className="bg-white/10 backdrop-blur sm:px-12 lg:px-28 lg:w-3/5">
        <ul className="flex sm:gap-x-9 lg:gap-x-12">
          {navItems.map((navItem, index) => (
            <li
              key={navItem.name}
              className={`sm:py-10 border-b-[0.1875rem] ${
                currentPage === navItem.path
                  ? "border-white"
                  : "border-transparent hover:border-white/50"
              } `}
            >
              <Link
                href={navItem.path}
                className="text-white uppercase tracking-[0.15em] space-x-3"
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
    </div>
  );
};

export default NavBar;
