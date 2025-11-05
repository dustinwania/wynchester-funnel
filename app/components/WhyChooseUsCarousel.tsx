"use client";
import Image from 'next/image';
import { useState } from 'react';

const carouselItems = [
  {
    url: "/images/construction-needs.jpg",
    alt: "Construction Needs",
    text: "For Construction Needs",
  },
  {
    url: "/images/business-capital.jpg",
    alt: "Business Capital Needs",
    text: "For Business Capital Needs",
  },
  {
    url: "/images/hospital-bills.jpg",
    alt: "Urgent Hospital Bills",
    text: "For Urgent Hospital Bills",
  },
  {
    url: "/images/education-funds.jpg",
    alt: "Education Funds",
    text: "For Education Funds",
  },
  {
    url: "/images/travel-vacation.jpg",
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

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative group">
              <Image
                src={item.url}
                alt={item.alt}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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