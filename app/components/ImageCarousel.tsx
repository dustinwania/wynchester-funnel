"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
Carousel,
CarouselContent,
CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export default function ImageCarousel() {
    const autoplay = Autoplay({ delay: 2000, stopOnInteraction: false });
    return(
        <Carousel
            className="h-[50vh]"
            plugins={[
                Autoplay({
                delay: 2000,
                }),
            ]}
            >
                <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-full">
                    <Card className="h-[50vh] border rounded-lg">
                        <CardContent>
                        <span className="text-5xl font-bold">{index + 1}</span>
                        </CardContent>
                    </Card>
                    </CarouselItem>
                ))}
                </CarouselContent>
        </Carousel>
    )
    }