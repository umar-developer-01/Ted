import Image from "next/image";
import MainImage from "@/public/MainImage.jpg"

const Main = () => {
    return (

        <div className="px-40 pt-8">
            <div className="flex gap-3 items-center pb-10 border-b border-gray-300">
                <div className="basis-1/2 flex flex-col">
                    <div className="text-xs text-red-600 font-semibold mb-3">
                        CLIMATE CHANGE
                    </div>
                    <div className="text-3xl font-bold mb-1">
                        How to build movements that win
                    </div>
                    <div className="text-sm mb-2">
                        You’re invited into a bold new vision for the climate movement — a space of trust and honesty, where artists inspire action and everyone has a role to play. Social impact leader Matthew Phillips explores how shared purpose and imagination can revive the fragmented approach to climate action and unlock the power of collective momentum.
                    </div>


                    <div className="flex flex-col text-xs text-gray-500">
                        <p>Matthew Phillips</p>
                        <p>109K plays · 2 days</p>

                    </div>
                </div>

                <Image
                    src={MainImage}
                    alt="TED Logo"
                    className="basis-1/2 h-80 cursor-pointer"
                />

            </div>
        </div>


    )
}

export default Main 