import Image from "next/image";
import TedLogo from "@/public/tedLogo.png";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col">
                <Header />
                {/* <div>
                    Home Page
                </div> */}
            </div>
        </>
    )
}

export default HomePage


const Header = () => {
    return (
        <>
            <div className="w-full h-[74px] flex justify-between text-shadow-lg items-center border-t-1 border-gray-300 border-b-2">

                <div className="flex gap-2 items-center">
                    <Image src={TedLogo} alt="ted" className="h-18 w-28 ml-2 cursor-pointer" />
                    <div className="text-xl text-gray-500">
                        Ideas change everything
                    </div>
                </div>
                <div className="mr-6">
                    <ul className="flex gap-6 text-gray-900 font-medium items-center cursor-pointer">
                        <li>WATCH</li>
                        <li>DISCOVER</li>
                        <li>ATTEND</li>
                        <li>PARTICIPATE</li>
                        <li>ABOUT</li>
                        <li>SIGNIN</li>
                        <li>
                            <button className="px-5 py-3 bg-red-600 text-white text-lg text-medium font-semibold rounded-md cursor-pointer">Membership</button>

                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}