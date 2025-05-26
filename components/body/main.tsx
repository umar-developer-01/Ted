import Image from "next/image";
import MainImage from "@/public/New Heading.jpg"

const Main = () => {
    return (

        <div className="px-54 pt-8">
            <div className="flex gap-3 items-center pb-12 border-b border-gray-300">
                <div className="basis-1/2 flex flex-col">
                    <div className="text-md text-red-600 font-semibold mb-3">
                        GLOBAL ISSUES
                    </div>
                    <div className="text-5xl font-bold mb-2">
                    How my (slightly annoying) art went viral
                    </div>
                    <div className="text-xl mb-2 leading-6">
                    Headlines warn of a world in collapse, but solutions journalist Angus Hervey finds the overlooked triumphs that never make the news — from empty malaria wards to a regrowing Amazon rainforest. With hard data and stories from the frontlines, he reveals the hidden progress that perseveres even as it feels like the world is falling apart, and challenges us to decide which future we'll help write.
                    </div>


                    <div className="flex flex-col text-md text-gray-500 leading-5">
                        <p>Angus Hervey</p>
                        <p>171K plays · 2 days</p>

                    </div>
                </div>

                <Image
                    src={MainImage}
                    alt="TED Logo"
                    className="basis-1/2 h-[440px] cursor-pointer ml-6"
                />

            </div>
        </div>


    )
}

export default Main 