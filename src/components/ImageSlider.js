import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

export default function ImageSlider() {
  const slides = [
    {
      url: "https://static.wixstatic.com/media/311dce_5f7b473e73604c359af3492903deac41~mv2.png/v1/fill/w_2232,h_395,al_c,q_90,enc_auto/311dce_5f7b473e73604c359af3492903deac41~mv2.png",
    },
    {
      url: "https://static.wixstatic.com/media/311dce_64e7f025fbf147258029294eb482e3c3~mv2.png/v1/fill/w_2232,h_395,al_c,q_90,enc_auto/311dce_64e7f025fbf147258029294eb482e3c3~mv2.png",
    },
    {
      url: "https://static.wixstatic.com/media/311dce_91d7ce8323da4b3f88d9027fc837dd0a~mv2.png/v1/fill/w_2232,h_395,al_c,q_90,enc_auto/311dce_91d7ce8323da4b3f88d9027fc837dd0a~mv2.png",
    },

    {
      url: "https://static.wixstatic.com/media/311dce_447a17f9e2cd4fe7ad662d64c34cf301~mv2.png/v1/fill/w_2232,h_395,al_c,q_90,enc_auto/311dce_447a17f9e2cd4fe7ad662d64c34cf301~mv2.png",
    },
    {
      url: "https://static.wixstatic.com/media/aabc0d_51104e5c97f543dab90632bb8f4b33f0~mv2.png/v1/fill/w_2232,h_395,al_c,q_90,enc_auto/aabc0d_51104e5c97f543dab90632bb8f4b33f0~mv2.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="max-w-[1480px] h-[500px] w-full m-auto py-16 relative group">
      <div
        className="w-full h-full bg-center bg-cover duration-200"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          transition: "background-image 0.5s ease",
        }}
        alt={slides[currentIndex].alt}
      ></div>

      <div className="flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer text-slate-400 ${
              currentIndex === slideIndex ? "text-slate-950" : ""
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
