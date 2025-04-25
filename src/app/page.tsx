import Image from "next/image";
import InputBar from "./(components)/inputBar/page";
import HowAjWork from "./Home/howAjWork";
import Faq from "./Home/faqs";
import KeyFeatures from "./Home/features";
// import Partners from "./(components)/partersBar/page";

export default function Home() {
  return (
    <div className="px-20">
      <div className="flex item-center justify-between my-30 gap-5">
        <div className="flex flex-col flex-1 justify-center gap-10">
          <h1 className="text-[40px] tracking-wide leading-13 font-semibold">Your AI-Powered Guide to <span className="text-transparent  bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] ">Education</span>, <span className="text-transparent  bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Careers</span> & <span className="text-transparent  bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Everything</span> in Between</h1>
          <span className="text-left w-3/4">Alumna.ai is India’s first dedicated AI foundation model for EdTech — <br />
            built to help students discover the right colleges, courses, internships, and
            career paths with hyper-personalized guidance.</span>
          <div className="w-3/4">
            <InputBar />
          </div>
        </div>
        <div className="">
          <Image
            src="/Image/robot.png" // Assuming the image is located at public/images/hero-image.jpg
            alt="Hero Image"
            width="600"
            height="500"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <KeyFeatures/>
      {/* <Partners /> */}
      <div className="my-30">
        <HowAjWork />
      </div>

      <Faq />
      {/* <div className="h-[3px] w-full bg-[radial-gradient(closest-side,#A07DF1_0%,#F69DBA_50%,transparent_100%)]" /> */}

    </div>
  );
}
