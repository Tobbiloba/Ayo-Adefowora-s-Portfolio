import { BiChevronDown } from "react-icons/bi";
function Mainpage() {

    return (
        <div className="bg-black flex flex-col h-[87.5vh] lg:h-[95vh] items-center lg:mb-0 mt-28 lg:mt-12">
            <div className=" flex flex-row mr-40 lg:mr-80">
                <div className="flex flex-col mt-3 lg:mt-72 w-[45vw]">
                    <div className="">
                     <h1 className="lg:text-7xl text-4xl text-white font-semibold">CREATING <span className="text-orange-400">SORCERY</span> WITH FRAMES</h1>
                    </div>
                    <div className="mt-6 w-[27vw]">
                        <h1 className="text-xl text-slate-500 font-semibold">Hello, i'm <span className="text-white text-2xl">AYOMIDE</span>, a certified <span className="text-white text-2xl">Google UX Designer</span> with over
                        a year experience in the field of design.</h1>
                    </div>
                    <div className="lg:mt-16 mt-8 lg:mr-0 ml-40 items-center">
                        <button className="mr-10 bg-transparent hover:bg-orange-500 w-40 mb-4 lg:mb-0 text-white font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">Contact me</button>
                        <button className="bg-orange-500 hover:bg-orange-700 w-40 text-white font-bold py-2 px-4 border border-orange-700 rounded">Case Studies</button>
                    </div>
                </div>   
            </div>
            <div  className="bottom-20 lg:bottom-0 relative">
                <BiChevronDown 
                className="mt-32"
                style={{
                    color: "white",
                    fontSize: "40px",
                }}/>
            </div>
            
        </div>
        
    )
}
export default Mainpage;