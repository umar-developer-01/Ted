import Image from "next/image";
import TedTalkDaily from "@/public/tedTalkDaily.png"

const TalkDaily = () => {
    return (
        <div className="mx-60 mt-2 grid grid-cols-6 mb-25">
            <div className="col-span-2 pr-6">
                <div className="text-4xl font-semibold mb-5">
                    Every new talk – podcast style.
                </div>

                <div className="text-xl font-medium leading-7 mb-6">
                    Today’s most innovative ideas are all on the TED Talks Daily podcast. Experts share how you can give your kids more freedom, explain how the latest tech is curing diseases faster, and more.
                </div>
               
               <button className="bg-[#000000] text-white py-4 px-6 text-lg rounded-md">
                   Listen Now
               </button>
            </div>
            <div className="col-span-4">
                <Image src={TedTalkDaily} alt="ted-talk-daily" className="w-full" />
            </div>

        </div>
    )

}

export default TalkDaily