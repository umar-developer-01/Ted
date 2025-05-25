import Card from "@/components/card"
import Popular1 from "@/public/Popular1.jpg";
import Popular2 from "@/public/Popular2.jpg";
import Popular3 from "@/public/Popular3.jpg";
import Popular4 from "@/public/Popular4.jpg"


const info = [
    {
        image: Popular1,
        tag: "POLITICS",
        desc: "This is what a digital coup looks like",
        name: "Carole Cadwalladr",
        plays: "204K plays",
        time: "2 months ago"
    }, {
        image: Popular2,
        tag: "HEALTH",
        desc: "Why social health is key to happiness and longevity",
        name: "Kasley Killam",
        plays: "928K plays",
        time: "3 months ago"
    }, {
        image: Popular3,
        tag: "RELATIONSHIP",
        desc: "The benefits of not being a jerk to yourself",
        name: "Dan Harris",
        plays: "1.88M plays",
        time: "3 years ago"
    }, {
        image: Popular4,
        tag: "SCIENCE",
        desc: "How we're reverse engineering the human brain in the lab",
        name: "Sergiu P. Pasca",
        plays: "348K plays",
        time: "3 years ago"
    }
]



const Popular = () => {
    return (
        <div className="text-lg font-bold py-4 mx-54 border-t  border-gray-500">
            
            <p className="ml-6 font-semibold text-lg pt-2">POPULAR FROM TED</p>
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
                        type={"popular"}
                    />
                ))}


            </div>
         </div>
    )
}

export default Popular