import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./Components/Hero";
import HeroSection from "./Components/HeroSection";
import LandingPage from "./Components/LandingPage";
import TestComponent from "./Components/TestComponent";

import Desert from "./Components/Desert";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="">
        <HeroSection />
        {/* <Desert /> */}
      </div>
    </>
  );
}
