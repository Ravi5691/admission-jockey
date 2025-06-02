import Image from "next/image";
import InputBar from "./dashboard/partials/inputBar";
import HowAjWork from "./HomeComponents/howAjWork";
import Faq from "./HomeComponents/faqs";
import KeyFeatures from "./HomeComponents/features";
import Footer from "./HomeComponents/footer";
import Navbar from "./navbar/homeNav";
import Model from "./HomeComponents/3dmodel";
// import Partners from "./(components)/partersBar/page";

export default function Home() {
  return (
    <div className="lg:px-20 px-5 overflow-x-hidden">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:my-20 md:max-h-screen gap-5 mt-10 md:mt-0">
        <div className="flex flex-col flex-1 justify-center lg:gap-10 gap-4">
          <h1 className="lg:text-[40px]  text-2xl lg:leading-13 leading-6 font-semibold">Your AI-Powered Guide to <span className="text-transparent  bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] ">Education</span>, <span className="text-transparent  bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Careers</span> & <span className="text-transparent  bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Everything</span> in Between</h1>
          <span className="text-left  lg:text-base text-[16px]  lg:w-3/4">Alumna.ai is India’s first dedicated AI foundation model for EdTech — <br />
            built to help students discover the right colleges, courses, internships, and
            career paths with hyper-personalized guidance.</span>
          <div className="lg:w-3/4">
            <InputBar  />
          </div>
        </div>
        <div className="flex flex-1  justify-center lg:justify-end ">
          <Model/>
        </div>
      </div>

      <KeyFeatures />
      {/* <Partners /> */}
      <div className="lg:my-30 my-10">
        <HowAjWork />
      </div>

      <Faq />
      <div className="mt-20">
        <Footer />
      </div>
      

    </div>
  );
}
