import { Card, CardContent } from "@/components/ui/card";
import StyledGrid from "../(components)/grid";
import ImageGrid from "../(components)/grid";
import SlicedImageGrid from "../(components)/grid";

export default function LoginPage() {
    return (
        <div className="lg:px-10 px-5 lg:py-8 py-5 grid lg:grid-cols-2 max-h-screen overflow-y-hidden gap-10">
            {/* Left Side */}
            <div className="lg:py-5 lg:px-15 flex flex-col lg:gap-20">
                <div className="lg:text-lg font-bold">
                    <span className="lg:block hidden">Admission Jockey</span>
                    <div className="lg:hidden block place-items-center w-full h-20 overflow-hidden"><img src="/logo.png" alt="Logo" className="w-full h-full object-cover" /></div>
                </div>
                <div className="flex flex-col justify-center place-items-center gap-10">
                    <h1 className="text-3xl font-bold">Join Alumna.ai</h1>
                    <Card className="border border-transparent lg:w-3/4 w-full  text-center bg-opacity-30 rounded-lg">
                        <div className="p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] rounded-lg">
                            <CardContent className="bg-black rounded-[10px] p-2 space-y-2">
                                <span className="text-sm text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Sign Up with Google</span>
                            </CardContent>
                        </div>
                    </Card>
                    <div className="flex flex-row gap-2 lg:w-3/4 w-full justify-center items-center">
                        <div className="h-[1px] w-1/2 bg-[radial-gradient(closest-side,#FFFFFF_20%,#FFFFFF_70%,transparent_100%)]" />
                        <h1>or</h1>
                        <div className="h-[1px] w-1/2 bg-[radial-gradient(closest-side,#FFFFFF_20%,#FFFFFF_70%,transparent_100%)]" />
                    </div>
                    <div className="flex flex-col gap-10 lg:w-3/4 w-full">
                        <form action="/Login/otp" method="get">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="email" className="text-white text-sm font-medium">
                                    Email ID / Phone Number
                                </label>

                                {/* Email Input */}
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-gradient-to-b from-[#ffffff0d] border-t border-[#ffffff14] to-[#ffffff04] rounded-lg"
                                />
                            </div>

                            {/* Continue Button */}
                            <button className="w-full py-3 mt-7 text-white font-semibold rounded-md 
                          bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] hover:brightness-110 hover:text-shadow active:scale-95 transition-all duration-200">
                                Continue
                            </button>
                        </form>

                        {/* Already have an account line */}
                        <p className="text-center text-white text-sm">
                            Already have an account?{" "}
                            <span className="text-pink-400 font-semibold cursor-pointer hover:underline">
                                Log in
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex ">
                <SlicedImageGrid />
            </div>
        </div>
    );
}
