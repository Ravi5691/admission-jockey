import DropMenu from "./dropmenu/page";
import { BellRing, User } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <header className=" text-white lg:px-10 px-5 lg:py-5">
        <div className="flex  place-items-center justify-between">
            <div className="flex items-center justify-center gap-10">
                <div className="lg:mt-2 mt-1"><DropMenu/></div>
                <div className="text-lg font-bold lg:block hidden">Alumna.ai</div>
                 <div className="lg:hidden block place-items-center w-100 h-20 overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-cover" /></div>
            </div>
            <div className=" items-center flex gap-6">
                <button className="px-6 py-2 rounded-lg font-semibold text-white text-base 
               bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
               border-t border-[#ffffff36] 
               shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
               hover:opacity-90 transition-all duration-300">New Chat</button>
                <button className="rounded-full flex items-center justify-center h-10 w-10 p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
                  <div className="rounded-full h-full w-full bg-black flex justify-center items-center"><BellRing className="h-[18px] text-[#f2acc3] "/></div>
                </button>
                <button className="rounded-full h-10 w-10 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] flex items-center justify-center  "><User/></button>
            </div>
        </div>
      </header>
      <main className="flex-grow p-4">{children} </main>
      {/* <footer className=" text-white text-center p-4">
        <p>&copy; 2023 Admission Jockey</p>
      </footer> */}
    </div>
  );
}