"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Section7() {
  const [clip, setClip] = useState(100);
  const [data, setData] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      console.log(y);

      if (y > 3550) {
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
      className="w-full  z-[20] h-screen overflow-hidden sticky top-0 "
      style={{
        clipPath: `inset(${clip}% 0 0 0)`,
        transition: "clip-path 0.2s ease-out",
      }}
    >
      <div className="  flex  flex-wrap  bg-[#2d333d] object-cover text-white w-full h-full">
        <div
          className="object-contain flex  flex-wrap text-white w-full h-full"
          style={{
            backgroundImage: "url(/grain.png)",
          }}
        >
            
                <div className=" absolute lg:top-15 lg:left-[35%]   lg:text-[200px] top-15 left-[15%]   text-[120px] z-30"><p className="font-iransans  text-[#d5d4d4]">METS</p></div>
                <div className=" absolute lg:top-72 lg:left-[20%]  lg:text-[150px]  top-80 left-[10%]   text-[100px] z-30"><p className="font-reza text-[#d5d4d4]">JUS</p></div>
            
          <figure
            className="w-1/2 h-screen flex justify-center  items-center"
            style={{
              clipPath: `inset(${clip}% 0 0 0)`,
              transition: "clip-path 0.2s ease-out",
            }}
          >
            <img
              src="/af7f01fc-e72c-47b8-9ad6-3406871b6444_le+clos+des+sens+juin+2022+plats+betterave9.jpg"
              alt=""
              className="w-[50%]  h-full object-cover"
            />
          </figure>
          <div className=" w-1/2   flex justify-end  flex-wrap *:text-[#b4b4b6]    p-0 m-0 ">
           <figure className="w-full ">
            <img src="/162a7e8e-da78-47ba-b4a0-0676ce063ee2_le+clos+des+sens+juin+2022+plats+betterave5.jpg" alt="" className="object-cover object-center h-screen" />
           </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
