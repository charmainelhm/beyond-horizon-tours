import React from "react";

type PageHeaderProps = {
  children: React.ReactNode;
  index: number;
  className?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  index,
  className = "",
}) => {
  return (
    <h1 className={`text-white sm:max-lg:pl-10 sm:text-start ${className}`}>
      <span className="inline-block opacity-25 mr-4 lg:mr-7">
        {index.toString().padStart(2, "0")}
      </span>
      {children}
    </h1>
  );
};

export default PageHeader;
