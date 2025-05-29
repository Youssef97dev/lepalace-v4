"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const imagesMobile = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/lnsa8ljehs1spbbgixyj",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/tw9svop8gi4zd05qmfag",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/reih5gxefnz0nemhmffn",
];

const imagesDesktop = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/mjwnl2xxinsqnkgxc943",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/itilbalha7c23d4w4mgj",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/bnnpww4d2mecdt02vk3h",
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesDesktop.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-[60vh] block lg:hidden">
        {imagesMobile.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full "
            />
          </div>
        ))}
      </div>
      <div className="relative w-full h-screen hidden lg:block">
        {imagesDesktop.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full "
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Slides;
