import Image, { StaticImageData } from "next/image";
import Eric from "@/public/EricSchmidt.jpg";
import Bernt from "@/public/BerntBornich.jpg";
import Carole from "@/public/CaroleCadwalladr.jpg";
import Taylor from "@/public/TaylorLynnCarpenter.jpg"


const info = [
    {
        image: Eric,
        tag: "TECHNOLOGY",
        desc: "The AI revolution is Underhyped"
    }, {
        image: Bernt,
        tag: "TECHNOLOGY",
        desc: "Meet NEO, your robot butler in training"
    }, {
        image: Carole,
        tag: "POLITICS",
        desc: "This is what a digital coup looks like"
    }, {
        image: Taylor,
        tag: "HEALTH",
        desc: "Parkour! How the sport keeps your body and mind fit"
    }
]
const data = info
const FourParts = () => {
    return (
        <>
            <div className="grid grid-cols-2">
                {/* {info.map((data, index) => (
                    <div>
                    <Card
                        key={index}
                        image={data.image}
                        tag={data.tag}
                        desc={data.desc}
                    />
                    </div>
                ))} */}
                <div>
                    A
                </div>
                <div>
                 B
                </div>
                <div>
                  C  
                </div>
                <div>
                   D
                </div>

            </div>
        </>
    )
}

export default FourParts


type CardProps = {
    image: StaticImageData;
    tag: string;
    desc: string;
}

const Card = ({ image, tag, desc }: CardProps) => {
    return (
        <div className="h-full min-h-[500px] flex flex-col p-6 border rounded-md">
            <Image
                src={image}
                alt="TED Logo"
                width={250}
                height={300}
                className="mb-4"
            />

            <div className="text-red-600 font-semibold mb-2">{tag}</div>

            <div className="text-gray-800">{desc}</div>
        </div>
    );
};