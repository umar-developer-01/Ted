


const items = ['TED-Ed', " Psychology", "Leadership", "Education", "AI", "Sleep", "Mental Health", "Business"]


const Discover = () => {
    return (
        <>
            <div className="bg-black  flex items-center px-52 py-8">
                <div className="text-4xl text-white mr-20">
                    Discover
                </div>
                <div className="flex gap-10 mr-20">
                    {items.map((item, index) => {
                        return (
                            <div className="bg-[#494949] text-white px-4 py-3 text-xl rounded-md" key={index}>
                                {item}
                            </div>
                        )
                    })}
                </div>
                {/* <div className="text-white">
                    Arrow
                </div> */}
                <div className="text-white text-2xl underline underline-offset-1">
                    See all
                </div>
            </div>
        </>
    )
}


export default Discover
