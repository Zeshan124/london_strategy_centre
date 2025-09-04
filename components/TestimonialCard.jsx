"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TestimonialCard = () => {
  /* ───────────────── DATA ───────────────── */
  const testimonials = [
    {
      id: 1,
      quote:
        "We don't need to teach women ambition; they already possess it. What we must do is empower them with the tools, strategies, and technology necessary to lead confidently in the digital era. That's why I am incredibly proud with the launch of the Women in Digital Leadership programme—the first of its kind—dedicated explicitly to empowering women to create lasting impact and drive meaningful change.",
      name: "Professor Yusra Mouzughi",
      title: "Provost Birmingham University",
      image: "/images/Professor-Yusra-Mouzughi.jpg",
      backgroundImage: "/images/Quote-BG-Image.jpg",
    },
    // {
    //   id: 2,
    //   quote:
    //     "Leadership in technology isn't just about understanding code or systems—it's about understanding people, fostering innovation, and creating environments where diverse perspectives can thrive and contribute to groundbreaking solutions.",
    //   name: "Dr. Sarah Mitchell",
    //   title: "Chief Technology Officer, TechCorp",
    //   image: "/images/Professor-Yusra-Mouzughi.jpg",
    //   backgroundImage: "/images/Quote-BG-Image.jpg",
    // },
  ];

  /* ───────────── STATE & HANDLERS ───────────── */
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* RIGHT‑SIDE PORTRAIT - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 lg:left-1/2 lg:w-1/2">
        <Image
          src={t.image}
          alt={t.name}
          fill
          priority
          className="object-cover object-center w-full h-full"
          sizes="50vw"
        />
      </div>

      {/* MOBILE IMAGE - Top Half */}
      <div className="block lg:hidden absolute top-0 left-0 w-full h-1/2">
        <Image
          src={t.image}
          alt={t.name}
          fill
          priority
          className="object-cover object-center w-full h-full"
          sizes="100vw"
        />
      </div>

      {/* QUOTE COLUMN */}
      <div
        className="absolute 
                   lg:left-0 lg:bottom-0 lg:w-[63%] lg:h-[90%]
                   left-0 bottom-0 w-full h-1/2
                   flex flex-col justify-between
                   overflow-visible z-10"
        style={{
          backgroundImage: `linear-gradient(
                      135deg,
                      rgba(14, 37, 86, 0.4),
                      rgba(14, 37, 86, 0.4)
                    ), url(${t.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* QUOTE TEXT */}
        <div className="flex-1 overflow-y-auto qoute-text">
          <blockquote className="text-white font-serif qoute-paragraph">
            "{t.quote}"
          </blockquote>
        </div>

        {/* BLUE FOOTER  —  same left padding + overlap to the right  */}
        <div
          className="relative bg-[#0098C8] flex items-stretch
             w-full lg:w-[calc(100%+72px)] overflow-hidden blue-footer"
        >
          <span className="block w-1 sm:w-1.5 bg-red-600 red-line" />

          <div
            className="flex flex-col justify-center
                  pl-6 sm:pl-10 lg:pl-14 py-4 sm:py-6 pr-6 sm:pr-8 lg:pr-10"
          >
            <h3 className="text-white text-lg sm:text-xl font-semibold">
              {t.name}
            </h3>
            <p className="text-white/90 text-sm sm:text-base">{t.title}</p>
          </div>
        </div>
      </div>

      {/* NAVIGATION ARROWS */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
                  rounded-full bg-transparent
                 flex items-center justify-center
                   hover:scale-110 transition
                   z-30"
        aria-label="Previous testimonial"
      >
        <Image
          src="/images/arrow-left.png"
          width={85}
          height={80}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-[85px] xl:h-20"
        />
      </button>

      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                rounded-full bg-transparent
                   flex items-center justify-center
                   hover:scale-110 transition
                   z-30"
        aria-label="Next testimonial"
      >
        <Image
          src="/images/arrow-right.png"
          width={85}
          height={80}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-[85px] xl:h-20"
        />
      </button>
    </div>
  );
};

export default TestimonialCard;

/* Responsive CSS */
const styles = `
/* Mobile First - Base styles (0-1023px) */
.qoute-text {
  padding: 2vh 5vw 1vh 6vw;
  display: flex;
  align-items: flex-start;
}

.qoute-paragraph {
  font-size: 1.1rem;
  line-height: 1.2;
  margin: 0;
}

.blue-footer {
  padding: 2vh 0vh;
  transform: translateX(0px);
  overflow: visible;
  flex-shrink: 0;
}

.red-line {
  transform: translateX(8px) translateY(-50px);
  z-index: 20;
}

/* Small screens (480px and up) */
@media (min-width: 480px) {
  .qoute-text {
    padding: 2.5vh 5vw 1vh 6vw;
  }
  
  .qoute-paragraph {
    font-size: 1.3rem;
    line-height: 1.3;
  }
  
  .blue-footer {
    padding: 2.2vh 0vh;
  }
  
  .red-line {
    transform: translateX(10px) translateY(-40px);
  }
}

/* Medium screens (768px and up) */
@media (min-width: 768px) {
  .qoute-text {
    // padding: 6vh 7vw 1vh 8vw;
    align-items: center;
    justify-content: center;
  }
  
  .qoute-paragraph {
    font-size: 1.6rem;
    line-height: 1.2;
  }
  
  .blue-footer {
    padding: 2.4vh 0vh;
    transform: translateX(0px);
  }
  
  .red-line {
    transform: translateX(14px) translateY(-65px);
  }
}

/* Large screens (1024px and up) - Desktop Layout */
@media (min-width: 1024px) {
  .qoute-text {
    padding: 0vh 9vw 0vh 10vw;
    align-items: center;
  }
  
  .qoute-paragraph {
    font-size: 1.5rem;
    line-height: 1.2;
  }
  
  .blue-footer {
    padding: 1.5vh 0vh;
    transform: translateX(100px);
  }
  
  .red-line {
    transform: translateX(18px) translateY(-55px);
  }
}

/* Extra large screens (1280px and up) */
@media (min-width: 1280px) {
  .qoute-text {
    padding: 0vh 11vh 0vh 13vh;
  }
  
  .qoute-paragraph {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .blue-footer {
    transform: translateX(110px);
  }
  
  .red-line {
    transform: translateX(20px) translateY(-65px);
  }
}

/* Ultra wide screens (1536px and up) */
@media (min-width: 1536px) {
  .qoute-text {
    padding: 0vh 12vh 0vh 14vh;
  }
  
  .qoute-paragraph {
    font-size: 3rem;
    line-height: 1.1;
  }
}
`;

// Inject styles into the document
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}