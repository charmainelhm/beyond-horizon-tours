"use client";
import Carousel from "@/components/Carousel";
import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import content from "@/data/content.json";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import animationAttributes from "@/data/contentAnimationAttributes.json";

const CrewPage = () => {
  const { crew } = content;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = crew.map((member) => (
    <Image
      key={`image-${member.name}`}
      src={member.images.webp}
      alt=""
      fill
      className="object-contain"
    />
  ));

  return (
    <PageWrapper
      pageName="crew"
      className="flex flex-col pt-[var(--content-top-padding)] lg:px-[var(--content-side-padding)] max-sm:pb-24"
    >
      <PageHeader index={2}>Meet your crew</PageHeader>
      <div className="max-sm:mt-8 max-lg:mt-14 lg:grow flex flex-col-reverse sm:flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pt-[min(10vw,9.6rem)] flex flex-col lg:pb-[min(6.5vw,5.8rem)] max-lg:px-[var(--content-side-padding)]">
          <motion.h3
            key={`role-${currentIndex}`}
            {...animationAttributes}
            className="text-white/50 mb-2"
          >
            {crew[currentIndex].role}
          </motion.h3>
          <motion.h2
            key={`crewName-${currentIndex}`}
            {...animationAttributes}
            className="text-white mb-6 text-2xl sm:text-4.5xl lg:text-5.5xl"
          >
            {crew[currentIndex].name}
          </motion.h2>
          <motion.p
            key={`bio-${currentIndex}`}
            {...animationAttributes}
            className="max-w-md max-lg:mx-auto"
          >
            {crew[currentIndex].bio}
          </motion.p>
          <div className="max-sm:order-first max-lg:my-8 lg:mt-auto max-lg:justify-center flex gap-x-3">
            {crew.map((member, index) => (
              <button
                key={member.name}
                className={`h-2.5 aspect-square rounded-full bg-white hover:opacity-50 ${
                  currentIndex === index ? "opacity-100" : "opacity-30"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="h-56 sm:h-[34rem] lg:h-full mx-auto relative">
            <Carousel
              content={carouselImages}
              scrollTo={currentIndex}
              setCurrentIndex={setCurrentIndex}
              className="h-full"
              slidesGap="lg"
            ></Carousel>
          </div>
          <hr className="sm:hidden"></hr>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CrewPage;
