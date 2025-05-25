import Main from "@/components/body/main"
import FourParts from "@/components/body/fourparts"
import Recommended from "@/components/recommended";
import News from "@/components/news";
import Popular from "@/components/popular";

const Body = () => {
    return (
        <>
            <Main />
            <FourParts/>
            {/* <Recommended/> */}
            <News/>
            <Popular/>
        </>
    )
}

export default Body