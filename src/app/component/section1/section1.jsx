import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import Category from "../category/category";

export default function Section1() {
  const [data, setData] = useState(false);
  const [category, setCategory] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(category);

      if (scrollY > 20) {
        setData(true);
      } else {
        setData(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div
        onClick={() => setCategory(!category)}
        className=" transition-all duration-700 shadow-lg z-50 rounded-full bg-[rgb(5,21,40)] group *:transition-all *:duration-150 block p-5  fixed left-5 top-5 cursor-pointer mt-2  "
      >
        <p className={`w-7 border-b-1 group-hover:translate-x-2  border-white `}></p>
        <p className="w-7  border-b-1 group-hover:-translate-x-2 mt-2 border-white"></p>
      </div>
      {<Category category={category}  />}






      <div
        className="w-full overflow-hidden h-screen  z-0   flex flex-wrap bg-center object-cover  "
        style={{
          backgroundImage:
            "url(/de564b5f-f7b2-48ee-944c-53723ef4330c_CLOS-DES-SENS-MATTHIEU-CELLARD-SALLE-38+2.jpg)",
        }}
      >
        {category && <Category />}
        <div className="w-full flex flex-wrap  bg-[#2d333d] opacity-90">
          <div
            className="w-full flex flex-wrap pb-20 object-contain text-white *:text-white"
            style={{ backgroundImage: "url(/grain.png)" }}
          >
            <div className="w-full  flex flex-wrap py-4">
              <div className="py-4 w-full  flex">
                <div className=" w-2/3  lg:w-3/4">
                  <p
                    className={`w-full text-4xl  ml-26 lg:text-9xl transform transition-all duration-150 lg:ml-56 font-iransans tracking-[8px] ${
                      data ? "pas" : "yas"
                    }`}
                  >
                    LA TABLE
                  </p>
                </div>
              </div>
              <div className="w-full *:py-3 lg:*:py-0 ">
                <div className="w-full   ">
                  <p
                    className={`text-5xl  text-center lg:text-start font-[V] font-hamid lg:ml-[30%] ${
                      data ? "pas" : "yas"
                    }`}
                  >
                    Restaurant
                  </p>
                </div>
                <div className="w-full">
                  <p
                    className={` text-4xl lg:text-5xl text-center lg:text-start  font-hamid lg:ml-[30%] ${
                      data ? "pas" : "yas"
                    }`}
                  >
                    gastronomique
                  </p>
                </div>
                <div className="w-full">
                  <p
                    className={` text-3xl lg:text-5xl  text-center lg:text-start font-hamid lg:ml-[30%] ${
                      data ? "pas" : "yas"
                    }`}
                  >
                    3* MICHELIN ANNECY
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full py-1  *:text-1xl lg:*:text-2xl text-center lg:text-start *:py-2 lg:*:ml-[50%] ">
              <p className={`font-hamid  ${data ? "pas" : "yas"}`}>
                La cuisine est une ode aux poissons de lacs
              </p>
              <p className={`font-hamid ${data ? "pas" : "yas"}`}>
                alpins. Et une fête du monde végétal, aux
              </p>
              <p className={`font-hamid ${data ? "pas" : "yas"}`}>
                mille saveurs et textures, à travers le
              </p>
              <p className={`font-hamid ${data ? "pas" : "yas"}`}>
                maraîchage, la cueillette sauvage et notre
              </p>
              <p className={`font-hamid ${data ? "pas" : "yas"}`}>
                propre jardin. L'univers carné ? Juste
              </p>
              <p className={`font-hamid ${data ? "pas" : "yas"}`}>
                support de condimentation au service d'un
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
