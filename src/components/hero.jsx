import React from 'react'

function Hero() {
    return (
        <header className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
            <div className="absolute z-10 w-auto min-w-full min-h-full max-w-none [filter:brightness(0.35)_saturate(0.85)_contrast(0.8)]">
                <video
                    className='w-full h-full object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/videos/bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='cursor-default absolute z-20 backdrop:top-0.5 left-0 pl-20 w-5/6 text-txt'>
                <h1 className="text-[90px] font-bold leading-none tracking-normal">
                    <div className="leading-[1.05em]">
                        <span className="transition duration-300 ease-in-out text-[100px] text-prim inline-block hover:scale-110">Web Design</span> & {''}
                        <span className="transition duration-300 ease-in-out text-[100px] text-prim inline-block hover:scale-110">SEO</span> <br />Service Done
                        <span className="underline pl-5 decoration-prim">Right</span>
                    </div>
                </h1>

                <h2 className="text-[29px] font-semibold text-txt tracking-wide pt-6">Boost your online prseense and reach more <br />
                    customers with Digital Upgrade, LLC.</h2>
                <button className="transition duration-700 ease-in-out text-txt text-2xl font-extrabold border-solid border-prim bg-gradient-to-r from-cta-grad-1 from-0% 
                to-cta-grad-2 to-100% border-4 mt-5 px-7 py-4 rounded-full hover:from-cta-h-grad-1 hover:to-cta-h-grad-2">Learn More</button>
            </div>

        </header >
    )
}

export default Hero;