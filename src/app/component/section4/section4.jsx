import React, { useEffect, useState } from "react";

export default function Section2() {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState(false);
  const[data,setData]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setActive(y >= 1450);
      if (y>2050) {
        setData(true)
      }else{
        setData(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // در mount هم اجرا کن

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = active ? -(scrollY - 1500) * 0.8 : 0;

  return (
    <div className="w-full h-screen bg-[#2d333d]  object-cover sticky top-0 z-10">
      <div
        className="w-full h-screen  absolute top-0 left-0 bg-[#0d0d0d]  z-50"
        style={{
          transform: `translateY(${translateY*1.2}px)`,
          transition: "transform 0.1s linear",
        }}
      ></div>
      <div
        className="object-contain flex  flex-wrap text-white z-[2]"
        style={{
          backgroundImage: "url(/grain.png)",
        }}
      >
        <div className="w-1/2  *:text-[#b4b4b6]">
          <div className={`w-full flex justify-center  lg:pt-44 lg:pb-10  transition-all duration-700 ease-out ${data ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-2xl pt-10 pb-2 lg:py-0  md:text-3xl lg:text-5xl">PRENEZ PLACE</p>
          </div>
          <div className={`w-full flex justify-center text-center lg:text-start transition-all duration-700 ease-out ${data ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-1xl tracking-[2px] font-hamid lg:ml-7  w-[90%] lg:w-[59%]">
              Tel un tableau composé d’éléments naturels et artistiques, la
              salle de notre restaurant gastronomique invite à la sérénité.
              Tantôt bercés par les flammes de la sculpturale cheminée, tantôt
              emportés par la quiétude de notre terrasse aux marronniers
              centenaires, prenez place dans l'écrin, le ballet commence !
            </p>
          </div>
          <div className={`w-full flex justify-center lg:justify-start  py-5  transition-all duration-700 ease-out  ${data ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><button className="px-4 py-1 text-sm lg:ml-40  transition-all duration-700 border hover:bg-[#d5d4d4] hover:text-black border-white">RESERVER UNE TABLE</button></div>
        </div>
        <div className="w-1/2 h-full flex justify-center">
          <img
            src="/b5c82a2d-5a2a-4016-8538-61502f0de152_le+clos+des+sens+juin+2022+salle-7.jpg"
            alt=""
            className="lg:w-[60%] h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
}
