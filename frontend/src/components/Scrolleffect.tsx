"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import bmw from "@/../public/images/bmw.png";
import ford from "@/../public/images/ford.png";
import hyundai from "@/../public/images/hyundai.png";
import porsche from "@/../public/images/porsche.png";
import toyota from "@/../public/images/toyota.png";
import lamboghini from "@/../public/images/lamborghini.png";

import Image, { StaticImageData } from "next/image";
interface Logo {
  name: string;
  src: StaticImageData;
  alt: string;
}

interface AdvancedLogoScrollProps {
  logos?: Logo[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  staggerDelay?: number;
}

const defaultLogos: Logo[] = [
  {
    name: "bmw",
    src: bmw,
    alt: "Vercel",
  },
  {
    name: "ford",
    src: ford,
    alt: "Next.js",
  },
  {
    name: "hyundai",
    src: hyundai,
    alt: "React",
  },
  {
    name: "porsche",
    src: porsche,
    alt: "TypeScript",
  },
  {
    name: "toyota",
    src: toyota,
    alt: "Tailwind CSS",
  },
  {
    name: "lamboghini",
    src: lamboghini,
    alt: "TypeScript",
  },
  {
    name: "hyundai",
    src: hyundai,
    alt: "React",
  },
  {
    name: "ford",
    src: ford,
    alt: "Next.js",
  },
];

export function AdvancedLogoScroll({
  logos = defaultLogos,
  speed = "fast",
  direction = "left",
  pauseOnHover = true,
  staggerDelay = 0.1,
}: AdvancedLogoScrollProps) {
  const controls = useAnimation();

  const getAnimationDuration = () => {
    switch (speed) {
      case "slow":
        return 60;
      case "fast":
        return 10;
      default:
        return 10;
    }
  };

  const startAnimation = () => {
    const duration = getAnimationDuration();

    if (direction === "left") {
      controls.start({
        x: [0, -480 * logos.length],
        transition: {
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        },
      });
    } else {
      controls.start({
        x: [-100 * logos.length, 0],
        transition: {
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        },
      });
    }
  };

  useEffect(() => {
    startAnimation();
  }, [speed, direction, logos.length]);

  const handleHoverStart = () => {
    if (pauseOnHover) {
      controls.stop();
    }
  };

  const handleHoverEnd = () => {
    if (pauseOnHover) {
      startAnimation();
    }
  };

  return (
    <div className="w-full overflow-hidden ">
      <motion.div
        className="flex items-center h-full py-12"
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        style={{ width: `${logos.length * 200}px` }}
      >
        {/* Triple the logos for smoother infinite effect */}
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center justify-center">
            {logos.map((logo, index) => (
              <motion.div
                key={`${setIndex}-${index}`}
                className="flex items-center justify-center mx-20 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * staggerDelay,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -5, 5, 0],
                  transition: {
                    scale: { type: "spring", stiffness: 300, damping: 20 },
                    rotate: { duration: 0.5 },
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto max-w-[140px] object-contain drop-shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/10 to-transparent pointer-events-none z-10" />

      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/10 to-transparent pointer-events-none z-10" />

      {/* Center spotlight effect (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none z-5">
        <div className="w-full h-full bg-gradient-to-r from-white/20 via-transparent to-white/20" />
      </div>
    </div>
  );
}
