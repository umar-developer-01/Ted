import Card from "@/components/card"
import Eric from "@/public/EricSchmidt.jpg";
import Bernt from "@/public/BerntBornich.jpg";
import Carole from "@/public/CaroleCadwalladr.jpg";
import Taylor from "@/public/TaylorLynnCarpenter.jpg"


const info = [
    {
        image: Eric,
        tag: "GLOBAL-ISSUES",
        desc: "The AI revolution is Underhyped",
        name: "Eric Schmidt",
        plays: "204K plays",
        time: "3 days ago"
    }, {
        image: Bernt,
        tag: "TECHNOLOGY",
        desc: "Meet NEO, your robot butler in training",
        name: "Bernt",
        plays: "928K plays",
        time: "1 month ago"
    }, {
        image: Carole,
        tag: "POLITICS",
        desc: "This is what a digital coup looks like",
        name: "Carole",
        plays: "1.88M plays",
        time: "1 month ago"
    }, {
        image: Taylor,
        tag: "HEALTH",
        desc: "Parkour! How the sport keeps your body and mind fit",
        name: "Taylor",
        plays: "348K plays",
        time: "1 month ago"
    }
]


const News = () => {
    return (
        <div className="text-lg font-bold py-4 mx-54 border-t  border-gray-500">
            
            <p className="ml-6 font-semibold text-lg pt-2">NEWEST FROM TED</p>
            <div className="grid grid-cols-4 pt-6 mb-14 divide-x-1 divide-gray-200">
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
         </div>
    )
}

export default News