"use client";

import { Card, CardContent } from "@/components/ui/card";
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
    url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1470&auto=format&fit=crop",
    alt: "Luxury car on road",
  },
  {
    url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop",
    alt: "Classic car front view",
  },
  {
    url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop",
    alt: "Modern SUV",
  },
  {
    url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop",
    alt: "Sports car",
  },
  {
    url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1464&auto=format&fit=crop",
    alt: "Family car",
  },
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
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover"
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