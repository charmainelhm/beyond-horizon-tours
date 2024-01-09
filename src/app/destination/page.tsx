"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import content from "@/data/content.json";
import animationAttributes from "@/data/contentAnimationAttributes.json";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import Carousel from "@/components/Carousel";
import { motion } from "framer-motion";

const DestinationPage = () => {
  const { destinations } = content;
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = destinations.map((destination) => (
    <Image
      key={`destination-${destination.name}`}
      src={destination.images.webp}
      alt=""
      fill
      className="object-cover"
    />
  ));

  return (
    <PageWrapper
      pageName="destination"
      className="pt-[var(--content-top-padding)] pb-14 lg:pb-28 lg:px-[var(--content-side-padding)]"
    >
      <PageHeader index={2}>Pick Your Destination</PageHeader>
      <div className="mt-8 sm:mt-14 lg:mt-16 lg:flex items-center">
        <div className="relative w-3/5 sm:w-2/5 mx-auto aspect-square">
          <Carousel
            content={carouselImages}
            scrollTo={currentIndex}
            setCurrentIndex={setCurrentIndex}
            className="h-full"
            slidesGap="lg"
          ></Carousel>
        </div>
        <div className="max-lg:px-[var(--content-side-padding)] max-lg:mt-8 lg:w-2/5">
          <ul className="h-fit flex justify-center lg:justify-start gap-x-6 sm:gap-x-8">
            {destinations.map((destination, index) => (
              <li key={destination.name} className="h-fit relative">
                {currentIndex === index && (
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="inline-block absolute inset-0 border-b-[0.1875rem] border-white"
                  ></motion.span>
                )}
                <button
                  key={destination.name}
                  className={`transition inline-block border-b-[3px] font-barlowCondensed uppercase max-sm:text-sm tracking-widest border-transparent  ${
                    index === currentIndex
                      ? "text-white"
                      : "hover:border-white/50"
                  } pb-2 sm:pb-3`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span>{destination.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <motion.h2
            key={`header-${currentIndex}`}
            {...animationAttributes}
            className="text-[3.5rem] sm:text-[5rem] lg:text-[6.25rem] text-white"
          >
            {destinations[currentIndex].name}
          </motion.h2>
          <motion.p
            key={`description-${currentIndex}`}
            {...animationAttributes}
            className="max-w-[36rem] mx-auto h-[6em]"
          >
            {destinations[currentIndex].description}
          </motion.p>
          <hr className="my-8 sm:mt-12 sm:mb-7"></hr>
          <div className="flex max-sm:flex-col justify-center lg:justify-start gap-y-8 lg:gap-x-16">
            <div className="sm:w-2/5 lg:w-1/2">
              <h3 className="font-barlowCondensed tracking-widest text-sm pb-3">
                Avg. Distance
              </h3>
              <motion.p
                key={`distance-${currentIndex}`}
                {...animationAttributes}
                className="font-bellefair text-2.5xl text-white uppercase"
              >
                {destinations[currentIndex].distance}
              </motion.p>
            </div>
            <div className="sm:w-2/5 lg:w-1/2">
              <h3 className="font-barlowCondensed tracking-widest text-sm pb-3">
                Est. Travel Time
              </h3>
              <motion.p
                key={`travel-${currentIndex}`}
                {...animationAttributes}
                className="font-bellefair text-2.5xl text-white uppercase"
              >
                {destinations[currentIndex].travel}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DestinationPage;
