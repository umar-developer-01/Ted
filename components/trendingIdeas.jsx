import Image from "next/image";
import Speaker from "@/public/Speaker.jpg"

const TrendingIdeas = () => {
    return (
        <div className="mx-60 mt-2  border-t  border-gray-500 mb-6">
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
        </div>

    )
}


export default TrendingIdeas