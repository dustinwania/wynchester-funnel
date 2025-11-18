"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselItems = [
  {
    url: "/images/construction-needs.png",
    alt: "Construction Needs",
    text: "For Construction Needs",
  },
  {
    url: "/images/business-capital.jpg",
    alt: "Business Capital Needs",
    text: "For Business Capital Needs",
  },
  {
    url: "/images/hospital-needs.png",
    alt: "Urgent Hospital Bills",
    text: "For Urgent Hospital Bills",
  },
  {
    url: "/images/education-funds.jpg",
    alt: "Education Funds",
    text: "For Education Funds",
  },
  {
    url: "/images/vacation-needs.png",
    alt: "Travel and Vacation",
    text: "For Travel & Vacation",
  },
];

export default function WhyChooseUsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === carouselItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run effect if currentIndex changes to reset the timer
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative group aspect-video">
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="object-cover"
              />
              {/* Overlay for the background effect */}
              <div className="absolute inset-0 bg-[#1e40af] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              {/* Text that pops up */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-bold text-center px-4">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 shadow-md"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 shadow-md"
      >
        &#10095;
      </button>
    </div>
  );
}