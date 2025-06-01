"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SigninImage from "@/public/signin.png"
import SigninImage2 from "@/public/signin2.png"

const SignIn = () => {
    const images = [SigninImage, SigninImage2];

    const [index, setIndex] = useState(0);


    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((prev) => (prev === 0 ? 1 : 0)); // Toggle image index between 0 and 1

        }, 20000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className="grid grid-cols-2 h-screen w-screen">
                <div className="col-span-1 relative w-full h-full">
                    <Image
                        src={images[index]}
                        alt="signin"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="col-span-1 flex flex-col">
                    <div className="basis-[60%] flex flex-col items-center justify-center">
                        <div className="text-3xl mb-7">
                            Sign in or create a new account
                        </div>
                        <div className="flex flex-col gap-2 mb-10">
                            <div className="text-lg text-gray-800">
                                Email address
                            </div>
                            <input className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md px-5 py-5 w-[560px] text-lg" placeholder="" />
                        </div>
                        <button className="rounded-md bg-[#eeeeee] text-xl text-[#bbbbbb] px-8 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Continue
                        </button>


                    </div>

                    <div className="basis-[40%]">
                        This is the B
                    </div>

                </div>

            </div>
        </>
    )
}

export default SignIn  



// relative on the container is required for fill to work.

// fill makes the image position absolute and stretch to all edges of the container.

// objectFit: "cover" makes sure the image covers the container area without distortion.

// Make sure the container (col-span-1 div) has a defined height (e.g., via parent or CSS), otherwise height: 0.