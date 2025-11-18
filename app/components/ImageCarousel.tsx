"use client";
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

// Car images for the carousel
const carImages = [
  {
    url: "/images/car-loan-carousel-1.jpg",
    alt: "Luxury car on road",
  }
];

export default function ImageCarousel() {
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
  
  return (
    <Carousel
      className="h-[70vh] w-full"
      plugins={[autoplay]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {carImages.map((image, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="h-[70vh] w-full relative overflow-hidden">
              <Image 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                width={1470}
                height={700}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-white/30 hover:bg-white/50" />
      <CarouselNext className="right-4 bg-white/30 hover:bg-white/50" />
    </Carousel>
  );
}