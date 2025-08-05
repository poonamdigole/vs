
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const RoboticsLabGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/74002a48-5100-46e2-a5c9-d02577557c89.png",
      alt: "VS Robotics Lab - Main classroom view with workstations"
    },
    {
      src: "/lovable-uploads/5d30a3de-1c0d-4ef6-8be4-c9fac0f7f9b9.png",
      alt: "VS Robotics Lab - Student workstations and equipment"
    },
    {
      src: "/lovable-uploads/5dd43a45-f220-485c-af03-55662435643e.png",
      alt: "VS Robotics Lab - 3D printing and prototyping station"
    },
    {
      src: "/lovable-uploads/1ce762e4-d4b9-4559-9ab3-7fa27e0a92f2.png",
      alt: "VS Robotics Lab - Advanced equipment and learning materials"
    },
    {
      src: "/lovable-uploads/35d2ac7d-ef3a-434c-a7d2-ff6db9b99f62.png",
      alt: "VS Robotics Lab - Interactive learning environment"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-6">
                <Card className="bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-blue-900/20 border border-gray-600/30 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 animate-float hover:scale-105">
                  <CardContent className="p-4">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-2">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-80 object-cover rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent rounded-xl"></div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-gray-300 text-sm font-medium opacity-80">
                        {image.alt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gradient-to-r from-gray-800/90 to-blue-800/80 border-gray-500/40 text-white hover:from-gray-700/90 hover:to-blue-700/80 backdrop-blur-md shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110" />
        <CarouselNext className="bg-gradient-to-r from-gray-800/90 to-blue-800/80 border-gray-500/40 text-white hover:from-gray-700/90 hover:to-blue-700/80 backdrop-blur-md shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110" />
      </Carousel>
    </div>
  );
};

export default RoboticsLabGallery;
