import React from "react";
import Image from "next/image";
import temple from "@/images/slide-0a.webp";
import mountain from "@/images/slide-0b.jpg";
import logo from "@/images/logo.webp";
import Rectangle from "@/images/Rectangle.svg";

import Ellipse2 from "@/images/Ellipse2.svg";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-light5">
      <div className="grid grid-cols-6 grid-rows-5 gap-0">
        <div className="col-start-1 col-end-4 row-start-1 row-end-3 pt-12 pl-12">
          <h1 className="text-6xl font-cabinet-black text-gray6">
            There are 5 reasons you should visit Nepal
          </h1>
          <p className="pt-4 text-5xl font-cabinet-thin text-gray6">
            Embark on a visual journey through Nepal: from towering peaks to
            ancient culture and the birthplace of Buddha.
          </p>
        </div>
        <div className="col-start-4 col-end-7 row-span-2 pt-24 ">
          <Image
            src={mountain}
            alt="mountain"
            height={550}
            className="object-cover rounded-3xl "
          />
        </div>
        <div className="flex items-center justify-center col-start-2 col-end-3 row-start-2 row-end-3 pl-12">
          <Image src={Ellipse2} height={100} alt="circle" className="z-10" />
        </div>
        <div className="col-start-1 col-end-2 row-span-2 row-start-2 row-end-3 pt-12">
          <Image src={temple} alt="temple" className="rounded-3xl" />
        </div>
        <div className="flex items-center justify-end col-start-3 col-end-3 row-start-2 row-end-3">
          <div className="overflow-hidden max-h-96">
            <Image
              src={logo}
              alt="logo"
              className="rounded-3xl"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
