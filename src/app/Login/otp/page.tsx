"use client"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import SlicedImageGrid from "../../(components)/grid"

export default function OTPPage() {
    return (
        <div className="px-10 py-8 grid grid-cols-2 max-h-screen overflow-y-hidden gap-10">
            <div className="py-5 px-15 flex flex-col gap-20">
                <div className="text-lg font-bold">Admission Jockey</div>
                <div className="flex flex-col justify-center place-items-center gap-10">
                    <h1 className="text-3xl font-bold">Verify your Account</h1>
                    <div className="flex flex-col gap-2 mt-5">
                        <form action="/dashboard" className="flex flex-col gap-3">
                        <span className="font-bold">OTP</span>
                        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>

                        <button className="w-full py-3 mt-7 text-white font-semibold rounded-md 
                          bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] hover:brightness-110 hover:text-shadow active:scale-95 transition-all duration-200">
                            Verify
                        </button>
                        </form>

                        <p className="text-center mt-10 text-white text-sm">
                        Didn’t get the code?{" "}
                            <span className="text-pink-400 font-semibold cursor-pointer hover:underline">
                            Resend OTP 
                            </span>
                        </p>
                    </div>
                </div>
            </div>


            <div className="hidden md:flex ">
        <SlicedImageGrid/>
            </div>
        </div>
    )
}