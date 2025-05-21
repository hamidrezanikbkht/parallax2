"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Section6() {
  const [clip, setClip] = useState(100);
  const [data, setData] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      console.log(y);

      if (y > 3250) {
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
      className="w-full  z-[20] sticky top-0 overflow-hidden "
      style={{
        clipPath: `inset(${clip}% 0 0 0)`,
        transition: "clip-path 0.2s ease-out",
        backgroundImage:
          "url(/70df9696-d5f9-4a86-a945-8af042119094_CLOS-DES-SENS-MATTHIEU-CELLARD-CAVE-ET-VIN-6.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="  flex  flex-wrap opacity-85 bg-[#2d333d] object-cover text-white w-full h-full">
        <div
          className="object-contain flex  flex-wrap text-white w-full h-full"
          style={{
            backgroundImage: "url(/grain.png)",
          }}
        >
          <div className=" w-1/2        *:text-[#b4b4b6]     ">
            <div
              className={`w-full   pt-33 lg:pt-64  text-5xl  transition-all duration-500 ease-out  ${
                data ? "opacity-100   translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className=" text-2xl   md:text-3xl lg:text-5xl text-center ">
                VERRE DE TERROIR
              </p>
            </div>
            <div className=" w-full   flex justify-center  tracking-[2px] text-[#b4b4b6] text-1xl transition-all duration-700 ease-out ">
              <p
                className={`transition-all font-hamid py-10 text-start ml-10 duration-700  ease-out ${
                  data
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } `}
              >
                Explorer un territoire et rendre à la vigne la beauté des
                racines locales, les cépages d’ici, écho aux flacons d’ailleurs,
                la pertinence d’une équipe sommelière en totale cohérence
              </p>
            </div>
            <div className="w-full flex justify-center ">
              <button className={`border px-6 py-1 text-sm hover:bg-[#d5d4d4] hover:text-black transition-all duration-700 border-white${data
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"}`}>
                NOS MENUS
              </button>
            </div>
          </div>
          <figure
            className="w-1/2 h-screen flex justify-center items-center"
            style={{
              clipPath: `inset(${clip}% 0 0 0)`,
              transition: "clip-path 0.2s ease-out",
            }}
          >
            <img
              src="/d0aa44b1-9ca3-4778-9c7f-a24eeb542626_le+clos+des+sens+juin+2022+salle-37.jpg"
              alt=""
              className="w-[50%] h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
