import React, { useEffect, useState } from "react";

export default function Section2() {
  const [scrollY, setScrollY] = useState(0);
  const [ data,setData]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrollY(y);
      
      
      if (y>920) {
        setData(true)
      }else{
        setData(false)
      }
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-screen   bg-[#2d333d] sticky top-0  object-cover    ">
      <div
        className="  object-contain flex  flex-wrap    text-white z-[2]"
        style={{
          backgroundImage: "url(/grain.png)",
        }}
      >
        <div
          className="w-full  h-screen absolute top-0 left-0 overflow-hidden  bg-[#0d0d0d] z-[3]"
          style={{
            transform: `translateY(${-scrollY * 0.8}px)`,
            transition: "transform 0.1s linear",
          }}
        ></div>
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
        <div className="w-1/2 h-screen ">
          <img
            src="/d165d5d8-79f0-4dec-b725-6bbf36ffc80a_le+clos+des+sens+juin+2022+salle-1.jpg"
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}
