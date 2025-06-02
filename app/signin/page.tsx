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

        }, 10000);

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
                    <div className="basis-[50%] flex flex-col items-center justify-center mt-16">
                        <div className="text-4xl mb-6">
                            Sign in or create a new account
                        </div>
                        <div className="flex flex-col gap-2 mb-10">
                            <div className="text-lg text-gray-800">
                                Email address
                            </div>
                            <input className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md px-5 py-5 w-[560px] text-lg" placeholder="" />
                        </div>
                        <button className="mt-2 rounded-md bg-[#eeeeee] text-xl text-[#bbbbbb] px-8 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Continue
                        </button>


                    </div>
                    <div className="basis-[5%] flex items-center gap-4">
                        <div className="flex-grow h-[2px] bg-gray-200"></div>
                        <span className="text-gray-400 text-lg">OR</span>
                        <div className="flex-grow h-[2px] bg-gray-200"></div>
                    </div>


                    <div className="basis-[45%] flex flex-col text-xl text-gray-700 font-semibold items-center mt-15 gap-8">
                        <div className="flex justify-center bg-gray-100 w-[300px] py-4 rounded-md hover:bg-gray-200 cursor-pointer">Continue With Apple</div>
                        <div className="flex justify-center bg-gray-100 w-[300px] py-4 rounded-md hover:bg-gray-200 cursor-pointer">Continue With Google</div>
                        <div className="flex justify-center bg-gray-100 w-[300px] py-4 rounded-md hover:bg-gray-200 cursor-pointer">Continue With Facebook</div>
                    </div>


                </div>

            </div >
        </>
    )
}

export default SignIn



// relative on the container is required for fill to work.

// fill makes the image position absolute and stretch to all edges of the container.

// objectFit: "cover" makes sure the image covers the container area without distortion.

// Make sure the container (col-span-1 div) has a defined height (e.g., via parent or CSS), otherwise height: 0.