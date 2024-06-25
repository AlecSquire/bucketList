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
    text: "    Golden sands of the Sahara Desert.",
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
    text: "Crystal-clear waters of the Caribbean Sea.",
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

        {/* <Image src={logo} alt="Logo" width={100} height={50} /> */}
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
                  objectFit="cover"
                  className="glide__image"
                />
                <div className="absolute top-0 left-0 z-10 flex flex-col items-start justify-center w-2/5 h-full p-4 text-white bg-opacity-50 backdrop-filter backdrop-blur-md">
                  <h1 className="text-2xl text-center sm:text-3xl font-cabinet-medium sm:font-cabinet-bold mt-52 ">
                    {slide.text}
                  </h1>
                  <p className="flex items-center justify-center pt-12 pb-16 mb-4 text-2xl text-center sm:pl-52 font-cabinet-bold sm:font-cabinet-extralight">
                    <MdOutlineLocationOn className="mr-2" />
                    {slide.location}
                  </p>
                  <Link
                    href={slide.link}
                    className="bg-[#DEAD00] drop-shadow-2xl text-black font-cabinet-regular flex items-center justify-center w-full max-w-xs mx-auto px-6 py-3 rounded-md transition duration-300 ease-in-out hover:bg-[#FF7F11] sm:w-full md:w-80 lg:w-96"
                  >
                    GO!
                  </Link>
                  <div className="absolute flex space-x-8 bottom-12 left-8">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="text-white hover:text-gray-300" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-white hover:text-gray-300" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-white hover:text-gray-300" />
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
