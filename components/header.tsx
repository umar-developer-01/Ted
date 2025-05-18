import Image from "next/image";
import TedLogo from "@/public/tedLogo.png";


const Header = () => {

    return (
        <header className="w-full h-[74px] flex items-center justify-between border-t border-b-2 border-gray-300 shadow-md px-4">
            {/* Logo and Tagline for bigger screen */}
            <div className="hidden lg:flex items-center gap-3">
                <Image
                    src={TedLogo}
                    alt="TED Logo"
                    className="w-28 h-18 cursor-pointer"
                />
                <span className="text-xl text-gray-500">Ideas change everything</span>
            </div>

            {/* Navigation for bigger screen */}
            <nav className="hidden lg:block mr-4">
                <ul className="flex items-center gap-6 text-gray-900 font-medium">
                    {["WATCH", "DISCOVER", "ATTEND", "PARTICIPATE", "ABOUT", "SIGNIN"].map((item) => (
                        <li key={item} className="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out">{item}</li>
                    ))}
                    <li>
                        <button className=" cursor-pointer px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-md transition duration-300 ease-in-outs">
                            Membership
                        </button>
                    </li>
                    <li>
                        <button aria-label="Search" className="p-1 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-9 w-9 lg:hidden">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <Image
                src={TedLogo}
                alt="TED Logo"
                className="w-26 h-12 cursor-pointer lg:hidden"
            />

            <div className="cursor-pointer text-black hover:text-red-600 transition duration-300 ease-in-out mr-2 lg:hidden">Signin</div>
        </header>

    )
}

export default Header