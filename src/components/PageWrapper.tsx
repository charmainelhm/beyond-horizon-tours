import React from "react";
import backgroundImages from "@/data/backgroundImages.json";
import PageBackground from "./PageBackground";

type PageWrapperProps = {
  pageName: "home" | "destination" | "crew" | "technology";
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ pageName, children }) => {
  return (
    <>
      {children}
      <PageBackground images={backgroundImages[pageName]} />
    </>
  );
};

export default PageWrapper;
