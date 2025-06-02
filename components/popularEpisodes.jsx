import Card from "@/components/card"
import Popular1 from "@/public/Popular1.jpg";
import Popular2 from "@/public/Popular2.jpg";
import Popular3 from "@/public/Popular3.jpg";
import Popular4 from "@/public/Popular4.jpg"


const info = [
    {
        image: Popular1,
        tag: "COMMUNICATION",
        desc: "Reducing toxic polarization – one conversation at a time",
        name: "Dave Isay, Elise Hu",
     
        time: "11 months ago",
        videoTime: "18"
    }, {
        image: Popular2,
        tag: "LITERATURE",
        desc: "TED Talks Daily Book Club: Horse Barbie",
        name: "Geena Rocero, Elise Hu",
     
        time: "11 months ago",
        videoTime: "27"
    }, {
        image: Popular3,
        tag: "CULTURE",
        desc: "Fixable Live - A conversation with Scott Galloway",
        name: "Scott Galloway, Frances Frei",
     
        time: "1 year ago",
        videoTime: "32"
    }, {
        image: Popular4,
        tag: "ENTERTAINTMENT",
        desc: "Carrie Brownstein",
        name: "Debbie Millman",
     
        time: "1 year ago",
        videoTime: "63"
    }
]



const PopularEpisodes = () => {
    return (
        <div className="text-lg font-bold py-4 mx-54 border-t  border-gray-500">
            <div className="ml-6 pt-2 flex justify-between">
                <p className="font-semibold text-lg ">POPULAR PODCAST EPISODES</p>
                <p className="font-semibold text-lg underline mr-6">Browse all Podcasts</p>
            </div>
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
                        videoTime={data.videoTime}
                    />
                ))}


            </div>
        </div>
    )
}

export default PopularEpisodes