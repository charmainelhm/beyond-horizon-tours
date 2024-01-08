"use client";
import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import React, { useState } from "react";
import content from "@/data/content.json";
import Image from "next/image";
import DestinationPage from "../destination/page";
import Carousel from "@/components/Carousel";

const TechnologyPage = () => {
  const { technology } = content;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = technology.map((tech) => (
    <>
      <Image className="lg:hidden" src={tech.images.landscape} alt="" fill />
      <Image
        className="hidden lg:block"
        src={tech.images.portrait}
        alt=""
        fill
      />
    </>
  ));

  return (
    <PageWrapper pageName="technology">
      <div className="2xl:container gap-y-8 min-h-screen pt-[var(--content-top-padding)] lg:pl-[var(--content-side-padding)] max-lg:text-center">
        <PageHeader index={3}>SPACE LAUNCH 101</PageHeader>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between">
          <div className="relative aspect-[21/9] lg:w-[40%] lg:aspect-[9/10] max-lg:my-8">
            <Carousel
              content={carouselImages}
              scrollTo={currentIndex}
              setCurrentIndex={setCurrentIndex}
              className="h-full"
              slidesGap="sm"
            />
            {/* <Image
              className="lg:hidden"
              src={technology[currentIndex].images.landscape}
              alt=""
              fill
            />
            <Image
              className="hidden lg:block"
              src={technology[currentIndex].images.portrait}
              alt=""
              fill
            /> */}
          </div>
          <div className="lg:w-[50%] flex flex-col lg:flex-row gap-y-8 lg:gap-x-[min(6%,5rem)]">
            <div className="flex lg:flex-col max-lg:justify-center gap-4 lg:gap-8">
              {technology.map((_, index) => (
                <button
                  className={`w-[2.5em] sm:text-2xl lg:text-3.5xl aspect-square rounded-full border font-bellefair ${
                    index === currentIndex
                      ? "bg-white text-charcoal-900 border-white"
                      : "text-white border-white/25"
                  } hover:border-white`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="max-lg:px-[var(--content-side-padding)]">
              <h3 className="font-barlowCondensed tracking-widest text-sm mb-2">
                THE TERMINOLOGY…
              </h3>
              <h2 className="text-white text-2xl sm:text-4.5xl lg:text-5.5xl mb-4">
                {technology[currentIndex].name}
              </h2>
              <p className="max-w-md mx-auto">
                {technology[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TechnologyPage;
