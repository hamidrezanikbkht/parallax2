"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Section8() {
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
      className="w-full  z-[20] h-screen overflow-hidden  "
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
            <div className=" w-full lg:w-1/2   flex justify-end  flex-wrap *:text-[#b4b4b6]    p-0 m-0 ">
           <figure className="w-full ">
            <img src="/e542c8c8-eb84-4769-abb9-c96ab209413c_le+clos+des+sens+juin+2022+plats+ecrevisse+froide4.jpg" alt="" className="object-cover h-screen object-center" />
           </figure>
          </div>
            
          <figure
            className="lg:w-1/2 h-screen hidden lg:flex  justify-center  items-center"
            style={{
              clipPath: `inset(${clip}% 0 0 0)`,
              transition: "clip-path 0.2s ease-out",
            }}
          >
            <img
              src="/2028af1e-e62a-4f85-8587-aae889029dd6_le+clos+des+sens+juin+2022+plats+ecrevisse+froide11.jpg"
              alt=""
              className="w-[50%]  h-screen object-lef   object-cover"
            />
          </figure>
          
        </div>
      </div>
    </div>
  );
}
