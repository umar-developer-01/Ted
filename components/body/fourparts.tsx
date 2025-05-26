import Card from "@/components/card"
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
        time: "3 days ago",
        videoTime: "14"

    }, {
        image: Bernt,
        tag: "TECHNOLOGY",
        desc: "Meet NEO, your robot butler in training",
        name: "Bernt Børnich",
        plays: "928K plays",
        time: "1 month ago",
        videoTime: "11"
    }, {
        image: Carole,
        tag: "POLITICS",
        desc: "This is what a digital coup looks like",
        name: "Carole Cadwalladr",
        plays: "1.88M plays",
        time: "1 month ago",
        videoTime: "16"
    }, {
        image: Taylor,
        tag: "HEALTH",
        desc: "Parkour! How the sport keeps your body and mind fit",
        name: "Taylor Carpenter",
        plays: "348K plays",
        time: "1 month ago",
        videoTime: "7"
    }
]

const FourParts = () => {
    return (
        <>
            <div className="grid grid-cols-4 mx-54 pt-8 mb-14 divide-x-1 divide-gray-200">
                {info.map((data, index) => (
                    <Card
                        key={index}
                        image={data.image}
                        tag={data.tag}
                        desc={data.desc}
                        name={data.name}
                        plays={data.plays}
                        time={data.time}
                        type={"main"}
                        videoTime={data.videoTime}
                    />
                ))}


            </div>
        </>
    )
}

export default FourParts


