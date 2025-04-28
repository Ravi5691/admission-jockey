import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
    return (
        <div className="px-10 py-8 grid grid-cols-2 min-h-screen gap-10">
            {/* Left Side */}
            <div className="py-5 px-15 flex flex-col gap-20">
                <div className="text-lg font-bold">Admission Jockey</div>
                <div className="flex flex-col justify-center place-items-center gap-10">
                    <h1 className="text-3xl font-bold">Join AJ</h1>
                    <Card className="border border-transparent w-3/4  text-center bg-opacity-30 rounded-lg">
                        <div className="p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] rounded-lg">
                            <CardContent className="bg-black rounded-[10px] p-2 space-y-2">
                                <span className="text-sm text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Sign Up with Google</span>
                            </CardContent>
                        </div>
                    </Card>
                    <div className="flex flex-row gap-2 w-3/4 justify-center items-center">
                        <div className="h-[1px] w-1/2 bg-[radial-gradient(closest-side,#FFFFFF_20%,#FFFFFF_70%,transparent_100%)]" />
                        <h1>or</h1>
                        <div className="h-[1px] w-1/2 bg-[radial-gradient(closest-side,#FFFFFF_20%,#FFFFFF_70%,transparent_100%)]" />
                    </div>
                    <div className="flex flex-col gap-10 w-3/4">

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
                        <button className="w-full py-3 text-white font-semibold rounded-md 
                          bg-[linear-gradient(90deg,#F69DBA,#A07DF1)] hover:brightness-110 hover:text-shadow active:scale-95 transition-all duration-200">
                            Continue
                        </button>

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
            <div className="bg-[linear-gradient(90deg,#F69DBA,#A07DF1)] rounded-lg">
            </div>
        </div>
    );
}
