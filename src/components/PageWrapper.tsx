"use client";
import React from "react";
import backgroundImages from "@/data/backgroundImages.json";
import PageBackground from "./PageBackground";
import { motion } from "framer-motion";

type PageWrapperProps = {
  pageName: "home" | "destination" | "crew" | "technology";
  children: React.ReactNode;
  className?: string;
};

const PageWrapper: React.FC<PageWrapperProps> = ({
  pageName,
  children,
  className,
}) => {
  return (
    <>
      <motion.div
        className={`min-h-screen 2xl:container max-lg:text-center ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
      <PageBackground images={backgroundImages[pageName]} />
    </>
  );
};

export default PageWrapper;
