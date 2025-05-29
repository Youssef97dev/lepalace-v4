"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/l0ekp54asdehj5bpbgpg",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/url1v9lk6cofiop3rawc",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/fkrdwoonvv9ugospbtsp",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/l5jyim7ids0ntzgjqe7c",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/qrzfm1gxoanqcutp7grg",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/appmazhoyiswvsqwxdlo",
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-[60vh] lg:h-screen">
        {images.map((src, index) => (
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
