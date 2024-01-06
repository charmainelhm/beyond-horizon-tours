import React from "react";

type PageHeaderProps = {
  children: React.ReactNode;
  index: number;
};

const PageHeader: React.FC<PageHeaderProps> = ({ children, index }) => {
  return (
    <h1 className="max-sm:text-center uppercase text-white">
      <span className="inline-block opacity-25 mr-4 lg:mr-7">
        {index.toString().padStart(2, "0")}
      </span>
      {children}
    </h1>
  );
};

export default PageHeader;
