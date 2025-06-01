import Image from "next/image";
import TedEdImage from "@/public/TedEd.jpg";
import Trending1 from "@/public/trending-1.png";
import Trending2 from "@/public/trending-2.png";
import Paradox from "@/public/paradox.png";
import Death from "@/public/death.png";

const TedEd = () => {
    return (
        <div className="mx-60 mt-2  border-t  border-gray-300 mb-12">


            <div className="flex items-start">
                <p className="text-[100px] font-bold basis-1/2">TED-Ed</p>
                <div className="flex flex-col pt-6 basis-1/2">
                    <p className="text-xl font-medium leading-7 ">TED-Ed's captivating video animations ignite curiosity and make complex topics irresistibly engaging. Come scratch your itch to learn.</p>
                    <div className="pt-4 text-black text-lg font-bold underline underline-offset-1">
                        Browse all TED-Ed animations
                    </div>
                </div>

            </div>
            <Image src={TedEdImage} alt="speaker" className="w-full" />
            <div className="grid grid-cols-4 divide-x-1 divide-gray-200 mt-6">
                <div className="col-span-2 pr-4">
                    <div className="text-red-600 font-semibold mb-4">EDUCATION</div>
                    <div className="text-4xl font-semibold mb-5">
                    Would you eat a ghost pepper for a prize?
                    </div>

                    <div className="text-xl font-medium leading-7">
                    Welcome to Risky Business, the game where we find out how far people will go to win a prize! Today’s contestants are a 21 year-old, a 16 year-old, and a 12 year-old. They'll compete in a series of three challenges: eating ghost pepper cookies, swimming in honey, and crossing a balance beam over poison ivy.
                    </div>

                    <div className="flex items-center text-gray-500 gap-2 text-sm mt-4">

                        <div>Dan Kwartler</div>
                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>3 days ago</div>

                    </div>
                </div>
                <div className="col-span-1 px-4">

                    <div className="mb-6 h-[200px] w-full relative">
                        <Image src={Paradox} alt="TED Logo" className="w-full h-full" />
                        <span className="absolute bg-gray-800 text-white text-sm p-1 bottom-3 right-3">6 MIN</span>
                    </div>

                    <div className="text-red-600 font-semibold mb-3">CLIMATE-CHANGE</div>
                    <div className="text-xl font-bold mb-2">The trillion dollar paradox</div>
                    <div className="flex items-center text-gray-500 gap-2 text-sm">

                        <div>George Zaidan</div>
                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>5 days ago</div>
                    </div>



                </div>
                <div className="col-span-1 px-4">
                    <div className="mb-6 h-[200px] w-full relative">
                        <Image src={Death} alt="TED Logo" className="w-full h-full" />
                        <span className="absolute bg-gray-800 text-white text-sm p-1 bottom-3 right-3">5 MIN</span>
                    </div>

                    <div className="text-red-600 font-semibold mb-3">DEATH</div>
                    <div className="text-xl font-bold mb-2">The ethical dilemma of deathbed wishes</div>
                    <div className="flex items-center text-gray-500 gap-2 text-sm">

                        <div>Sarah Stroud, Michael Vazquez</div>
                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>10 days ago</div>
                    </div>
                </div>


            </div>
        </div>

    )
}


export default TedEd