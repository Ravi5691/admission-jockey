import InputBar from "../(components)/inputBar";

export default function DashboardPage() {
      return (
        <div className="flex flex-col items-center justify-center w-full max-h-screen px-20 relative">
            <div className=" flex flex-col items-center h-[500px] justify-center tracking-wide gap-5 my-4">
              <h1 className="text-5xl font-bold">Hey there <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F69DBA,#A07DF1)]">Aarav</span>! </h1>
              <span className="text-center text-2xl">I’m here to make things easier for you. <br />How can I help you?</span>
            </div>

            <div className="w-6xl fixed bottom-8">
             <InputBar 
              showMicButton={true}
              // customButton={
              //   <button>
              //     <SendHorizontal size={20} color="#fff" />
              //   </button>
              // }
              />
             </div>
            
        </div>
      )
}
