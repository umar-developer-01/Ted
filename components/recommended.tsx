import FirstRecommended from "@/public/First recommended.png";
import SecondRecommended from "@/public/second recommended.png"
import Image from "next/image";

const Recommended = () => {
    return (

        <div className="text-lg font-bold py-4 mx-60 mb-6 mt-2">

            <p className="font-semibold text-lg pt-2">RECOMMENDED FOR YOU</p>
            <div className="mt-6 grid grid-cols-12 divide-x-1 divide-gray-200">
                <div className="col-span-5 pr-5">
                    <div className="relative">
                        <Image src={FirstRecommended} alt="First-Recommendation" className="w-full h-full" />
                        <span className="absolute bg-gray-800 text-white text-sm p-1 bottom-3 right-3">14 MIN</span>
                    </div>

                    <div className="text-red-600 font-semibold mt-4 mb-4">HEALTH</div>

                    <div className="text-2xl font-bold mb-2">What happens when you take hot shower before going to sleep? A look at the sleep cycle</div>

                    <div className="mt-3 mb-3 font-medium leading-6">
                        Taking a hot shower before bed can positively impact sleep quality by raising body temperature and then allowing it to cool down rapidly, which signals the body to prepare for sleep.
                    </div>

                    <div className="flex items-center text-gray-500 gap-2 text-sm">
                        <div>Maria Sophocles</div>

                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>1 year ago</div>
                    </div>
                </div>
                <div className="col-span-4 px-5">
                    <div className="relative">
                        <Image src={SecondRecommended} alt="First-Recommendation" className="w-full h-full" />
                        <span className="absolute bg-gray-800 text-white text-sm p-1 bottom-3 right-3">8 MIN</span>
                    </div>
                    <div className="text-red-600 font-semibold mt-4 mb-4">SCIENCE</div>


                    <div className="text-2xl font-bold mb-2">CRISPR's nextadvance is bigger than you think</div>
                    <div className="mt-3 mb-3 font-medium leading-6">
                        You've probably heard of CRISPR, the revolutionary technology that allows us to edit the DNA in living organisms. Biochemist and 2023 Audacious Project
                    </div>
                    <div className="flex items-center text-gray-500 gap-2 text-sm">
                        <div>Jennifer Doudna</div>

                        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                        <div>2 year ago</div>
                    </div>
                </div>
                <div className="col-span-3">
                    SOCIAL-CHANGE
                </div>
            </div>
        </div>

    )
}

export default Recommended