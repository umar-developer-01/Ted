import Card from "@/components/card"
import News1 from "@/public/News1.jpg";
import News2 from "@/public/News2.jpg";
import News3 from "@/public/News3.jpg";
import News4 from "@/public/News4.jpg"


const info = [
    {
        image: News1,
        tag: "GLOBAL-ISSUES",
        desc: "Is this the time of monsters — or miracles?",
        name: "Angus Hervey",
        plays: "204K plays",
        time: "2 days ago"
    }, {
        image: News2,
        tag: "TECHNOLOGY",
        desc: "How my (slightly annoying) art went viral",
        name: "Joshua Schachter",
        plays: "928K plays",
        time: "3 days ago"
    }, {
        image: News3,
        tag: "DEATH",
        desc: "The ethical dilemma of deathbed wishes",
        name: "Sarah Stroud, Michael Vazquez",
        plays: "1.88M plays",
        time: "3 days ago"
    }, {
        image: News4,
        tag: "CULTURE",
        desc: "Why love is harder in a second language",
        name: "Magdalena Hoeller",
        plays: "348K plays",
        time: "3 days ago"
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
                        type={"news"}
                    />
                ))}


            </div>
         </div>
    )
}

export default News