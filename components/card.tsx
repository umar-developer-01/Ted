import Image, { StaticImageData } from "next/image";

type CardProps = {
    image: StaticImageData;
    tag: string;
    desc: string;
    name: string;
    plays: string;
    time: string;
}

const Card = ({ image, tag, desc, name, plays, time }: CardProps) => {

    return (
        <div className={`flex flex-col px-6`}>
               
                <div className="mb-6 h-[200px] w-full">
                    <Image src={image} alt="TED Logo" className="w-full h-full" />
                </div>

                <div className="text-red-600 font-semibold mb-4">{tag}</div>
                <div className="text-xl font-bold mb-2">{desc}</div>
                <div className="flex items-center text-gray-500 gap-2">
                    <div>{name}</div>
                    <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                    <div>{plays}</div>
                    <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                    <div>{time}</div>
                </div>
           
        </div>
    );
};

export default Card