import { motion } from "motion/react";
import WorkItem from "./WorkItem";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const worksData = [
  {
    title: "Bank Project Website",
    description:
      "A modern and secure interface for online banking with responsive layout, smooth animation and an emphasis on user experience.",
    type: "Frontend website development",
    img: assets.bank,
    link: "https://project-bank-chi.vercel.app/",
    reverse: false,
  },
  {
    title: "Hotels Project Website",
    description:
      "Development of a hotel booking website with convenient search, customer reviews and adaptation to all devices.",
    type: "Frontend website development",
    img: assets.hotel,
    link: "https://real-estate-rho-mauve.vercel.app/",
    reverse: true,
  },
  {
    title: "Cheese Project Website",
    description:
      "A landing page for cheese products with responsive layout, clean typography, and smooth animations. Built from scratch based on the design mockup and optimized for fast loading.",
    type: "Frontend website development",
    img: assets.cheese,
    link: "https://halerazxc.github.io/chees-html/",
    reverse: false,
  },
  {
    title: "2D Game Project Website",
    description:
      "A 2D game featuring modern design, interactive elements, and smooth transitions. Fully optimized for mobile devices and cross-browser compatibility.",
    type: "Frontend website development",
    img: assets.game,
    link: "https://halerazxc.github.io/Elemental_-2D-MMORPG/domendomen/",
    reverse: true,
  },
];

const Works = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      className="container mx-auto mt-[40px] lg:py-[34px] py-4 px-6 lg:px-[112px]"
    >
      <h1
        id="MyWorks"
        className="text-[30px] md:text-[40px] text-white font-extralight"
      >
        <span className="text-gray-500">Selected</span> Works
      </h1>

      {loading ? (
        <div className="flex flex-col gap-[50px] mt-[40px]">
          {Array.from({ length: worksData.length }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-2xl w-full h-[250px] animate-pulse"
            />
          ))}
        </div>
      ) : (
        worksData.map((works, index) => <WorkItem key={index} {...works} />)
      )}
    </motion.div>
  );
};

export default Works;
