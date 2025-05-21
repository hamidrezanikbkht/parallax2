"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Section5() {
  const [clip, setClip] = useState(100);
  const [data, setData] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      console.log(y);

      if (y > 2600) {
        setData(true);
      } else {
        setData(false);
      }
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // فاصله لبه بالایی سکشن تا بالای صفحه
      const distance = rect.top;

      // نرمال‌سازی مقدار distance به بازه 0 تا windowHeight
      let progress = 100 - (distance / windowHeight) * 100;

      // محدود کردن مقدار progress بین 0 تا 100
      if (progress < 0) progress = 0;
      if (progress > 100) progress = 100;

      setClip(100 - progress); // از 100% پنهان به 0% (کاملا باز)
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // اجرا هنگام mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen  z-[20] sticky top-0 bg-[#2d333d] overflow-hidden "
      style={{
        clipPath: `inset(${clip}% 0 0 0)`,
        transition: "clip-path 0.2s ease-out",
      }}
    >
      <div
        className="object-contain flex  flex-wrap text-white w-full h-full"
        style={{
          backgroundImage: "url(/grain.png)",
        }}
      >
        <figure
          className="w-1/2 h-screen flex justify-center items-center"
          style={{
            clipPath: `inset(${clip}% 0 0 0)`,
            transition: "clip-path 0.2s ease-out",
          }}
        >
          <img
            src="/17e48175-9987-4dbe-a296-ce68be91b1b4_clos-des-sens-juillet-2023-plats-fenouil3.jpg"
            alt=""
            className="w-[50%] h-full object-center object-cover"
          />
        </figure>
        <div className=" w-1/2   *:text-[#b4b4b6]    p-0 m-0 ">
          <div
            className={`w-full flex justify-center pt-44 pb-10 text-5xl  transition-all duration-500 ease-out  ${
              data ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className=" w-full lg:w-[80%] text-2xl  md:text-3xl lg:text-5xl">ÂME VEGETALE ET LACUSTRE</p>
          </div>
          <div className="w-[65%]   tracking-[2px] text-[#b4b4b6] text-1xl transition-all duration-700 ease-out ">
            <p
              className={`transition-all lg:ml-20 duration-700 ease-out font-hamid ${
                data ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } `}
            >
              Reflet d’un garde-manger nourricier, la cuisine, brut et
              authentique dessine ses lignes dans ses courbes sauvages et
              charnelles sans contour
            </p>
          </div>
          <div className={`w-full py-10 ${ data ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}><button className="border lg:ml-20 px-6 py-1 text-sm hover:bg-[#d5d4d4] hover:text-black transition-all duration-700 border-white">NOS MENUS</button></div>
        </div>
      </div>
    </div>
  );
}
