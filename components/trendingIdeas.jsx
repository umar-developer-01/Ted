import Image from "next/image";
import Speaker from "@/public/Speaker.jpg";
import Trending1 from "@/public/trending-1.png";
import Trending2 from "@/public/trending-2.png";

const TrendingIdeas = () => {
    return (
        <div className="mx-60 mt-2  border-t  border-gray-500 mb-8">
            <p className="font-semibold text-lg pt-4 pb-4">TRENDING IDEAS</p>
            <div className="border-t border-gray-300">
            </div>
            <div className="flex items-start">
                <p className="text-[100px] font-bold basis-1/2">AI</p>
                <div className="flex flex-col pt-6 basis-1/2">
                    <p className="text-xl font-medium leading-7 ">Gain a deeper understanding of AI and its impact on our world — uncover its potential, and feel inspired to tackle this transformative field.</p>
                    <div className="pt-4 text-black text-lg font-bold underline underline-offset-1">
                        Browse all AI
                    </div>
                </div>

            </div>
            <Image src={Speaker} alt="speaker" className="w-full" />
            <div className="grid grid-cols-4 divide-x-1 divide-gray-200 mt-6">
                <div className="col-span-2 pr-4">
                    <div className="text-red-600 font-semibold mb-4">TECHNOLOGY</div>
                    <div className="text-4xl font-semibold mb-5">
                        What if AI could spot your lies?
                    </div>

                    <div className="text-xl font-medium leading-7">
                        Humans are terrible at detecting lies, says psychologist Riccardo Loconte ... but what if we had an AI-powered tool to help? He introduces his team’s work successfully training an AI to recognize falsehoods in certain contexts, laying the groundwork for a world where everything from national security to social media is a little bit safer — and a bit more...
                    </div>

                    <div className="flex items-center text-gray-500 gap-2 text-sm mt-4">

                        <div>Riccardo Loconte</div>
                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>4 months ago</div>

                    </div>
                </div>
                <div className="col-span-1 px-4">

                    <div className="mb-6 h-[200px] w-full relative">
                        <Image src={Trending2} alt="TED Logo" className="w-full h-full" />
                        <span className="absolute bg-gray-800 text-white text-sm p-1 bottom-3 right-3">10 MIN</span>
                    </div>

                    <div className="text-red-600 font-semibold mb-3">TECHNOLOGY</div>
                    <div className="text-xl font-bold mb-2">A sonic journey through universe</div>
                    <div className="flex items-center text-gray-500 gap-2 text-sm">

                        <div>Felipe Sánchez Luna</div>
                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>8 months ago</div>
                    </div>



                </div>
                <div className="col-span-1 px-4">
                    <div className="mb-6 h-[200px] w-full relative">
                        <Image src={Trending1} alt="TED Logo" className="w-full h-full" />
                        <span className="absolute bg-gray-800 text-white text-sm p-1 bottom-3 right-3">5 MIN</span>
                    </div>

                    <div className="text-red-600 font-semibold mb-3">TECHNOLOGY</div>
                    <div className="text-xl font-bold mb-2">A hospital in the cloud bringing health care anywhere in the world</div>
                    <div className="flex items-center text-gray-500 gap-2 text-sm">

                        <div>Mohamed Aburawi</div>
                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>8 months ago</div>
                    </div>
                </div>


            </div>
        </div>

    )
}


export default TrendingIdeas