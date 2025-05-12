export default function Footer() {
    return (
        <div className="min-h-screen" >
            <div className="grid lg:grid-cols-2 grid-rows-2 justify-between items-center gap-15 h-110 lg:p-10 lg:pb-0 p-5">

                <div className=" flex flex-col  gap-5 ">
                    <h1 className="lg:text-[40px] text-[20px] font-semibold ">Lost in Choices? Let AI Be <br /> Your Guide</h1>
                    <span>Explore the smartest way to plan your education and <br /> career — all in one place.</span>
                    <button className="px-6 py-2 lg:w-35 w-30 mt-5 rounded-lg font-semibold text-white lg:text-base text-[12px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] border-t border-[#ffffff36] shadow-[0_0_11px_0_rgba(160,125,241,0.3)]  hover:opacity-90 transition-all duration-300">
                        Try It Now
                    </button>
                </div>
                <div className="bg-[#ffffff0f] w-full rounded-lg lg:h-[300px] h-[200px]"></div>

            </div>

            <div className="block place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1560" height="400" viewBox="0 0 1514 400" fill="none">
                    <g filter="url(#filter0_ii_679_90)">
                        <path
                            d="M248.5 6.28176C231.026 7.70096 57.0741 30.2549 1 85.612V424H1513V57.413C1324.78 94.8717 1270.35 103.173 1116.43 116.228C1076.27 116.228 977.996 139.483 727 75.431L723.408 74.3451C510.419 9.94891 445.397 -9.71017 248.5 6.28176Z"
                            fill="white"
                            fillOpacity="0.01"
                        />
                    </g>
                    <path
                        d="M248.5 6.28176C231.026 7.70096 57.0741 30.2549 1 85.612V424H1513V57.413C1324.78 94.8717 1270.35 103.173 1116.43 116.228C1076.27 116.228 977.996 139.483 727 75.431L723.408 74.3451C510.419 9.94891 445.397 -9.71017 248.5 6.28176Z"
                        stroke="black"
                    />
                    <defs>
                        <filter
                            id="filter0_ii_679_90"
                            x="0.5"
                            y="0.5"
                            width="1513"
                            height="448"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.780392 0 0 0 0 0.827451 0 0 0 0 0.917647 0 0 0 0.15 0"
                            />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_679_90" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="24" />
                            <feGaussianBlur stdDeviation="24" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.780392 0 0 0 0 0.827451 0 0 0 0 0.917647 0 0 0 0.08 0"
                            />
                            <feBlend mode="normal" in2="effect1_innerShadow_679_90" result="effect2_innerShadow_679_90" />
                        </filter>
                    </defs>
                </svg>
            </div>

        </div>
    )
}