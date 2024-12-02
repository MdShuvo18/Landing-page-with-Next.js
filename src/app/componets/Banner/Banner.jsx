import React from 'react';
import Image from 'next/image'
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div style={{ position: "relative", width: "500px", height: "700px" }}>
                    <Image width={500} height={700} src="/Mask group.png" />
                    <div
                        style={{
                            position: "absolute",
                            width: "500px",
                            height: "200px",
                            top: "410px",
                            left: "",
                            padding: "26px 32px",
                            gap: "10px",
                            borderRadius: "17px",
                            opacity: "1", // Adjusted from 0px (invisible) to 1 to make it visible
                            background: "#FFFFFFB2", // White with 70% opacity
                            backdropFilter: "blur(24px)", // Apply blur
                            zIndex: 10, // Ensures it's on top of the image
                        }}
                    >
                        <div className='flex gap-5 items-center'>
                           <h1 className='text-5xl font-bold'> 12,000+</h1> 
                           <div className="h-8 w-px bg-black"></div>
                           <h2 className='text-xl font-semibold'> Happy learners rely on us regularly</h2>
                        </div>
                    </div>
                </div>

                <div className='w-[448px] h-[427px] space-y-5'>
                    <h1 className="text-5xl font-bold">
                        #1 Platform Powering Health and Wellness
                    </h1>
                    <p className="text-2xl font-semibold">
                        We’re restoring home as the primary place of personal well-being
                    </p>
                    <p>
                        Health is not just about what you're eating. It's also about what you're thinking and saying
                    </p>
                    <button className="bg-cyan-600 text-white w-[157px] h-[48px] rounded-full">Browse Courses</button>
                    <button className="ml-3 bg-white text-cyan-600 w-[127px] h-[48px] rounded-full">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;