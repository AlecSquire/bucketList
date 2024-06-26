import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md"; // Import the location icon
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social media icons
import Link from "next/link";
import logo from "@/images/logo-travel.png"; // Import the logo
import desert from "@/images/hero2.jpg";
import nepal from "@/images/slide-2.webp";
import boat from "@/images/boat.jpg";
import beach from "@/images/beach.jpg";

const slides = [
  {
    image: desert,
    alt: "desert",
    text: "Golden sands and desert caves.",
    location: "Sahara Desert",
    link: "/desert",
  },
  {
    image: nepal,
    alt: "mountain",
    text: "Majestic beauty of the Himalayas.",
    location: "Nepal",
    link: "/nepal",
  },
  {
    image: beach,
    alt: "beach",
    text: "Turquoise waters and white sandy beaches.",
    location: "Maldives",
    link: "/beach",
  },
  {
    image: boat,
    alt: "boat",
    text: "Crystal-clear waters and sunset views.",
    location: "Caribbean Sea",
    link: "/boat",
  },
];

const GlideSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      autoplay: 4000,
      animationDuration: 1000,
    });

    glide.on("run.after", () => {
      setCurrentSlide(glide.index);
    });

    glide.mount();
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="flex rounded-full text-cyan-50">
        <h1 className="z-20 justify-start pt-12 pl-12 text-2xl items-top font-cabinet-bold">
          BucketList.
        </h1>
      </div>
      <div className="absolute inset-0 w-full h-full glide">
        <div className="w-full h-full glide__track" data-glide-el="track">
          <ul className="w-full h-full glide__slides">
            {slides.map((slide, index) => (
              <li key={index} className="relative h-full glide__slide">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  layout="fill"
                  objectPosition={slide.image === boat ? "center" : "bottom"}
                  objectFit="cover"
                  className="glide__image"
                />
                {/* glass effect */}
                <div className="absolute left-0 z-10 flex flex-col items-start justify-center w-full p-4 mt-2 text-white bg-opacity-50 sm:mt-0 top-3/4 sm:top-0 backdrop-filter h-1/3 sm:h-full sm:w-1/3 backdrop-blur-md ">
                  <div className="flex flex-col items-center justify-center sm:p-0 p-11 sm:mb-0 sm:items-center sm:justify-center">
                    <h1 className="pb-2 text-4xl text-center sm:pb-12 sm:mt-56 sm:text-3xl font-cabinet-medium sm:font-cabinet-bold ">
                      {slide.text}
                    </h1>

                    <Link
                      href={slide.link}
                      className="drop-shadow-2xl bg-light3 text-dark font-cabinet-regular mb-20 sm:mb-0 flex items-center justify-center w-full max-w-xs mx-auto px-6 p-3 rounded-md transition duration-300 ease-in-out hover:bg-[#FF7F11] sm:w-full md:w-80 lg:w-96"
                    >
                      <p className="flex items-center justify-center text-2xl text-center font-cabinet-bold sm:font-cabinet-extralight">
                        <MdOutlineLocationOn className="mr-2" />
                        {slide.location}
                      </p>
                    </Link>
                  </div>
                  <div className="absolute hidden space-x-8 sm:flex bottom-12 left-8">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="hidden text-white hover:text-gray-300" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="hidden text-white hover:text-gray-300" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="hidden text-white hover:text-gray-300" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute top-0 right-0 z-0 w-3/5 h-full"
        data-glide-el="controls"
      ></div>
      <div className="absolute z-20 flex items-center space-x-2 bottom-4 right-4">
        <div className="text-lg text-white">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default GlideSlider;
