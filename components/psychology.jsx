import Image from "next/image";
import TedEdImage from "@/public/TedEd.jpg";
import MentalHealth from "@/public/mental-health.png";
import Politics from "@/public/politics.png"


const Psychology = () => {
    return (
        <div className="mx-60 mt-2  border-t  border-gray-300 mb-12">


            <div className="flex items-start">
                <p className="text-[100px] font-bold basis-1/2">Psychology</p>
                <div className="flex flex-col pt-6 basis-1/2">
                    <p className="text-xl font-medium leading-7 ">rkGrab a front-row seat to unravelling the mysteries of the human mind and emba on a journey of self-discovery.</p>
                    <div className="pt-4 text-black text-lg font-bold underline underline-offset-1">
                        Browse all Psychology
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
                        Welcome to Risky Business, the game where we find out how far people will go to win a priWelcome to Risky Business, the game where we find out how far people will go to win a prize! Today’s contestants are a 21 year-old, a 16 year-old, and a 12 year-old. They'll compete in a series of three challenges: eating ghost pepper cookies, swimming in honey, and crossing a balance beam over poison ivy.
                    </div>

                    <div className="flex items-center text-gray-500 gap-2 text-sm mt-4">

                        <div>Dan Kwartler </div>
                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>3 days ago</div>

                    </div>
                </div>
                <div className="col-span-1 px-4">

                    <div className="mb-6 h-[200px] w-full relative">
                        <Image src={MentalHealth} alt="TED Logo" className="w-full h-full" />
                        <span className="absolute bg-gray-800 text-white text-sm p-1 bottom-3 right-3">14 MIN</span>
                    </div>

                    <div className="text-red-600 font-semibold mb-3">PSYCHOLOGY</div>
                    <div className="text-xl font-bold mb-2">The mental health AI chatbot made for real life</div>
                    <div className="flex items-center text-gray-500 gap-2 text-sm">

                        <div>Alison Darcy</div>
                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>27 days ago</div>
                    </div>



                </div>
                <div className="col-span-1 px-4">
                    <div className="mb-6 h-[200px] w-full relative">
                        <Image src={Politics} alt="TED Logo" className="w-full h-full" />
                        <span className="absolute bg-gray-800 text-white text-sm p-1 bottom-3 right-3">5 MIN</span>
                    </div>

                    <div className="text-red-600 font-semibold mb-3">CULTURE</div>
                    <div className="text-xl font-bold mb-2">How disgust drives your politics</div>
                    <div className="flex items-center text-gray-500 gap-2 text-sm">

                        <div>Cindy Kam</div>
                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>2 months ago</div>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default Psychology;