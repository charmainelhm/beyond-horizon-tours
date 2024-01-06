"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import content from "@/data/content.json";
import Image from "next/image";

const DestinationPage = () => {
  const { destinations } = content;
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="pt-[var(--spacing-above-content)]">
      <PageHeader index={2}>Pick Your Destination</PageHeader>
      <div className="relative aspect-square">
        <Image
          src={destinations[currentIndex].images.webp}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div>
        {destinations.map((destination, index) => (
          <button onClick={() => setCurrentIndex(index)} key={destination.name}>
            {destination.name}
          </button>
        ))}
      </div>
      <h2>{destinations[currentIndex].name}</h2>
      <p>{destinations[currentIndex].description}</p>
      <hr></hr>
      <div className="sm:flex">
        <div>
          <h3>Avg. Distance</h3>
          <p>{destinations[currentIndex].distance}</p>
        </div>
        <div>
          <h3>Est. Travel Time</h3>
          <p>{destinations[currentIndex].travel}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
