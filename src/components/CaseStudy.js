// import {phone1}
function CaseStudy() {
    return(
        <div className="flex flex-col  items-center h-[340vh] lg:h-[200vh] pt-16 overflow-x-hidden">
            <div className="lg:w-[65vw] w-[90vw]">
                <h1 className="text-2xl font-semibold text-white">Case Studies</h1>
            </div>

            <div className="mt-12 ">
                <div className="flex lg:flex-row flex-col-reverse lg:w-[65vw] lg:h-[52.5vh] w-[90vw] overflow-hidden">
                    <div className="flex flex-col lg:w-[30vw] w-[90vw] h-[50vh]">
                        <h1 className="text-white text-5xl mt-5 font-mono font-bold">Foodlink</h1>
                        <p className="text-white lg:w-[20vw] w-[90vw] text-2xl mt-20 leading-10">A food truck app designed for meeting user needs
                            of being able to order multiple meals and for the 
                            organization and delivery of the menu.
                        </p>
                        <button className="bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border mt-12 border-amber-500 hover:border-transparent rounded w-40">
                            Case Studies
                        </button>
                    </div>
                    <div className="lg:w-[40vw] w-[90vw] h-[45vh] lg:h-[50vh] bg-gradient-to-r from-indigo-700 rounded-xl relative right-0 lg:right-20">
                        <img className="absolute left-12 lg:right-0" src="/phone1.png" alt="phone"/>
                    </div>
                </div>

                 <div className="flex lg:flex-row overflow-hidden flex-col lg:w-[65vw] w-[90vw] lg:h-[50vh] mt-36">
                    <div className="lg:w-[40vw] w-[90vw] lg:h-[50vh] h-[45vh] bg-amber-500">
                        <img className="mt-12 relative right-12 lg:right-32" src="/laptop1.png" alt="phone"/>
                    </div>
                    <div className="flex flex-col lg:w-[30vw] w-[90vw] lg:ml-12 ml-0">
                        <h1 className=" text-white text-5xl mt-5 font-mono font-bold">Sought After Foundation</h1>
                        <p className="text-white lg:w-[20vw] w-[90vw] text-2xl mt-12 leading-10">A nongovernmmental organization dedicated
                        to ministering to abused women and abandoned children in the society. A redesign
                        of the organizations website.
                        </p>
                        <button className="bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border mt-6 border-amber-500 hover:border-transparent rounded w-36">
                            Case Studies
                        </button>
                    </div>
                </div>

                 <div className="flex lg:flex-row overflow-hidden flex-col-reverse lg:w-[65vw] w-[90vw] lg:h-[50vh] mt-36">
                    <div className="flex flex-col w-[90vw] lg:w-[30vw]">
                        <h1 className="text-white text-5xl lg:mt-5 mt-8 font-mono font-bold">Yu Mei</h1>
                        <p className="text-white lg:w-[20vw] w-[90vw] text-2xl lg:mt-20 mt-10 leading-10">
                            New Zealand based leather goods label with 
                            a focus on utilitarian design, made for
                            modern people seeking a new form of understate
                            luxury. A redesign of the brand.
                        </p>
                        <button className="bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border mt-12 border-amber-500 hover:border-transparent rounded w-40">
                            Case Studies
                        </button>
                    </div>
                    <div className="lg:w-[40vw] w-[90vw] lg:h-[50vh] h-[45vh] bg-slate-200 relative lg:right-20 right-0 flex justify-center items-center">
                        <img className="" src="/mac2.png" alt="phone"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CaseStudy