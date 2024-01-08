"use client";
import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import content from "@/data/content.json";
import Image from "next/image";
import React, { useState } from "react";

const CrewPage = () => {
  const { crew } = content;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <PageWrapper pageName="crew">
      <div className="flex flex-col max-lg:text-center 2xl:container min-h-screen pt-[var(--content-top-padding)] lg:px-[var(--content-side-padding)] max-sm:pb-24">
        <PageHeader index={2}>Meet your crew</PageHeader>
        <div className="max-sm:mt-8 max-lg:mt-14 lg:grow flex flex-col-reverse sm:flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pt-[min(10vw,9.6rem)] flex flex-col lg:pb-[min(6.5vw,5.8rem)] max-lg:px-[var(--content-side-padding)]">
            <h3 className="text-white/50 mb-2">{crew[currentIndex].role}</h3>
            <h2 className="text-white mb-6 text-2xl sm:text-4.5xl lg:text-5.5xl">
              {crew[currentIndex].name}
            </h2>
            <p className="max-w-md max-lg:mx-auto">{crew[currentIndex].bio}</p>
            <div className="max-sm:order-first max-lg:my-8 lg:mt-auto max-lg:justify-center flex gap-x-3">
              {crew.map((member, index) => (
                <button
                  key={member.name}
                  className={`h-2.5 aspect-square rounded-full bg-white hover:opacity-50 focus:opacity-50 ${
                    currentIndex === index ? "opacity-100" : "opacity-30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="h-56 sm:h-[34rem] lg:h-full mx-auto relative">
              <Image
                src={crew[currentIndex].images.webp}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <hr className="sm:hidden"></hr>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CrewPage;
