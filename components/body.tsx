import Main from "@/components/body/main"
import FourParts from "@/components/body/fourparts"
import Discover from "@/components/discover";
import Recommended from "@/components/recommended";
import News from "@/components/news";
import Popular from "@/components/popular";
import TalkDaily from "@/components/talkDaily";


const Body = () => {
    return (
        <>
            <Main />
            <FourParts />
            <Discover />
            <Recommended />
            <News />
            <Popular />
            <TalkDaily/>
        </>
    )
}

export default Body