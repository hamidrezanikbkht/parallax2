'use client';
import Section1 from "./component/section1/section1";
import Section2 from "./component/section2/section2";
import Section3 from "./component/section3/section3";
import Section4 from "./component/section4/section4";
import Section5 from "./component/section5/section5";
import Section6 from "./component/section6/section6";
import Section7 from "./component/section7/section7";
import Section8 from "./component/section8/section8";
import Section9 from "./component/section9/section9";

export default function Home() {
 

  return (
    <div className="w-full flex flex-wrap   2xl:container mx-auto">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </div>
  );
}
