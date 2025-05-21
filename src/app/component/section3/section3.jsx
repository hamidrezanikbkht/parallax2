"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Section3() {
  const [clip, setClip] = useState(100);
  const[data,setData]=useState(false)
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
          const y =window.scrollY
          console.log(y);
          
         if (y>1250) {
          setData(true)
         }else{
          setData(false)
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
      className="w-full h-screen sticky top-0  z-[10] bg-[#2d333d] overflow-hidden "  style={{
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
          className="w-1/2 h-screen "
          style={{
            clipPath: `inset(${clip}% 0 0 0)`,
            transition: "clip-path 0.2s ease-out",
          }}
        >
          <img
            src="/Zo56UB5LeNNTw_Xu_clos-des-sens-juin-2024-plats-artichaut4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </figure>
        <div className=" w-1/2  flex-wrap flex content-center justify-center    *:text-[#b4b4b6]   p-0 m-0 ">
          <div className={`w-full  flex justify-center   text-5xl  transition-all duration-500 ease-out ${data ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-2xl  md:text-3xl lg:text-5xl">L'ECRIN NATURE</p>
          </div>
          <div className="w-[65%]  py-10 text-center lg:text-start   tracking-[2px] text-[#b4b4b6] text-1xl transition-all duration-700 ease-out">
            <p className={`transition-all duration-700 ease-out font-hamid ${data ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Univers singulier, identitaire et façonné par l’homme. Essences de
              bois brulé, pierre de Savoie et cristal taillé, la salle,
              apaisante et épurée, accueille l’authentique transparence
              réconfort
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
