import Image from "next/image";
import InputBar from "./(components)/inputBar";
import HowAjWork from "./HomeComponents/howAjWork";
import Faq from "./HomeComponents/faqs";
import KeyFeatures from "./HomeComponents/features";
import Footer from "./HomeComponents/footer";
import Navbar from "./navbar/homeNav";
import Model from "./HomeComponents/3dmodel";
// import Partners from "./(components)/partersBar/page";

export default function Home() {
  return (
    <div className="px-20">
      <Navbar />
      <div className="flex item-center justify-between my-20 max-h-screen gap-5">
        <div className="flex flex-col flex-1 justify-center gap-10">
          <h1 className="text-[40px] tracking-wide leading-13 font-semibold">Your AI-Powered Guide to <span className="text-transparent  bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] ">Education</span>, <span className="text-transparent  bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Careers</span> & <span className="text-transparent  bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Everything</span> in Between</h1>
          <span className="text-left w-3/4">Alumna.ai is India’s first dedicated AI foundation model for EdTech — <br />
            built to help students discover the right colleges, courses, internships, and
            career paths with hyper-personalized guidance.</span>
          <div className="w-3/4">
            <InputBar />
          </div>
        </div>
        <div className=" flex flex-1 justify-end">
          <Model/>
        </div>
      </div>

      <KeyFeatures />
      {/* <Partners /> */}
      <div className="my-30">
        <HowAjWork />
      </div>

      <Faq />
      <Footer />

    </div>
  );
}
