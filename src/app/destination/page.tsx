"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import content from "@/data/content.json";
import Image from "next/image";

const DestinationPage = () => {
  const { destinations } = content;
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="pt-[var(--spacing-above-content)] pb-14 lg:pb-28 max-lg:text-center lg:flex items-end">
      <div className="lg:w-3/5">
        <PageHeader className="sm:text-start" index={2}>
          Pick Your Destination
        </PageHeader>
        <div className="relative w-3/5 sm:w-2/5 lg:w-3/5 mx-auto aspect-square my-8 sm:my-16 lg:mt-16 lg:mb-0">
          <Image
            src={destinations[currentIndex].images.webp}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="lg:w-2/5">
        <div className="flex justify-center lg:justify-start gap-x-6 sm:gap-x-8">
          {destinations.map((destination, index) => (
            <button
              key={destination.name}
              className={`border-b-[3px] uppercase max-sm:text-sm tracking-widest ${
                index === currentIndex
                  ? "text-white border-white"
                  : "border-transparent hover:border-white/50 focus:border-white/50"
              } pb-2 sm:pb-3`}
              onClick={() => setCurrentIndex(index)}
            >
              {destination.name}
            </button>
          ))}
        </div>
        <h2 className="text-[3.5rem] sm:text-[5rem] lg:text-[6.25rem] text-white">
          {destinations[currentIndex].name}
        </h2>
        <p>{destinations[currentIndex].description}</p>
        <hr className="my-8 sm:mt-12 sm:mb-7"></hr>
        <div className="flex max-sm:flex-col justify-center lg:justify-start gap-y-8 gap-x-16">
          <div>
            <h3 className="font-barlow tracking-widest text-sm pb-3">
              Avg. Distance
            </h3>
            <p className="font-bellefair text-2.5xl text-white uppercase">
              {destinations[currentIndex].distance}
            </p>
          </div>
          <div>
            <h3 className="font-barlow tracking-widest text-sm pb-3">
              Est. Travel Time
            </h3>
            <p className="font-bellefair text-2.5xl text-white uppercase">
              {destinations[currentIndex].travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
