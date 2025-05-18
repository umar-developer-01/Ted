import Image, { StaticImageData } from "next/image";
import Eric from "@/public/EricSchmidt.jpg";
import Bernt from "@/public/BerntBornich.jpg";
import Carole from "@/public/CaroleCadwalladr.jpg";
import Taylor from "@/public/TaylorLynnCarpenter.jpg"


const info = [
    {
        image: Eric,
        tag: "TECHNOLOGY",
        desc: "The AI revolution is Underhyped",
        name: "Eric Schmidt",
        plays: "204K plays",
        time: "3 days ago"
    }, {
        image: Bernt,
        tag: "TECHNOLOGY",
        desc: "Meet NEO, your robot butler in training",
        name: "Bernt Børnich",
        plays: "928K plays",
        time: "1 month ago"
    }, {
        image: Carole,
        tag: "POLITICS",
        desc: "This is what a digital coup looks like",
        name: "Carole Cadwalladr",
        plays: "1.88M plays",
        time: "1 month ago"
    }, {
        image: Taylor,
        tag: "HEALTH",
        desc: "Parkour! How the sport keeps your body and mind fit",
        name: "Taylor Lynn Carpenter",
        plays: "348K plays",
        time: "1 month ago"
    }
]

const FourParts = () => {
    return (
        <>
            <div className="grid grid-cols-4 px-54 pt-8 mb-20">
                {info.map((data, index) => (
                    <Card
                        key={index}
                        image={data.image}
                        tag={data.tag}
                        desc={data.desc}
                        name={data.name}
                        plays={data.plays}
                        time={data.time}
                    />
                ))}


            </div>
        </>
    )
}

export default FourParts


type CardProps = {
    image: StaticImageData;
    tag: string;
    desc: string;
    name: string;
    plays: string;
    time: string
}

const Card = ({ image, tag, desc, name, plays, time }: CardProps) => {
    return (
        <div className="flex flex-col border-r border-gray-200 px-6">
            <Image
                src={image}
                alt="TED Logo"
                width={350}
                height={370}
                className="mb-6"
            />

            <div className="text-red-600 font-semibold mb-4">{tag}</div>

            <div className="text-xl font-bold mb-2">{desc}</div>
            <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
               <div>{name}</div>
               <div className="h-1 w-1 rounded-full bg-gray-500"></div>
               <div>{plays}</div>
               <div className="h-1 w-1 rounded-full bg-gray-500"></div>
               <div>{time}</div>
            </div>
        </div>
    );
};