import React from "react";
import Image from "next/image";

type PageBackgroundProps = {
  images: { mobile: string; tablet: string; desktop: string };
};

const PageBackground: React.FC<PageBackgroundProps> = ({ images }) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={images.mobile}
        alt=""
        fill
        className="sm:hidden object-cover"
      />
      <Image
        src={images.tablet}
        alt=""
        fill
        className="sm:max-lg:block object-cover"
      />
      <Image
        src={images.desktop}
        alt=""
        fill
        className="hidden lg:block object-cover"
      />
    </div>
  );
};

export default PageBackground;
