function Service() {
    return (
        <div className="h-[100vh] w-[100vw] bg-black flex flex-col justify-center items-center">
            <div className="lg:w-[65vw] w-[90vw]">
                <h1 className="text-white text-xl font-bold">My Service</h1>
            </div>
            
            <div className="lg:w-[65vw] lg:h-[70vh] w-[90vw] border flex flex-col lg:flex-row mt-5">
                <div className="border overflow-hidden lg:w-[35vw] w-[90vw]">
                    <h1 className="text-black z-10 text-3xl font-semibold mt-12 ml-20 absolute">Web Designer</h1>
                    <img className="lg:w-[35vw] lg:h-[70vh] w-[90vw] h-[40vh] scale-100 hover:scale-125 ease-in duration-500 cursor-pointer" src="https://rare-gallery.com/uploads/posts/5388097-keyboard-mouse-glasses-notebook-coffee-mug-cup-floral-pattern-journal-planner-styled-workspace-desk-table-surface-flat-lay-white-desktop-computer-free-pictures.jpg" alt="services"/>
                </div>

                <div className="flex flex-row lg:flex-col">
                    <div className="overflow-hidden lg:w-[30vw] border">
                        <h1 className="text-black lg:text-3xl text-xl font-semibold lg:font-semibold mt-12 lg:ml-20 ml-4 absolute z-10">UX Researcher</h1>
                        <img className="lg:w-[30vw] w-[45vw] h-[35vh] scale-100 hover:scale-125 ease-in duration-500 cursor-pointer" src="https://img.freepik.com/premium-photo/three-stacks-books-wooden-table-isolated-white-background_418128-570.jpg" alt="services"/>
                    </div>
                    <div className="overflow-hidden lg:w-[30vw]">
                        <h1 className="text-black lg:text-3xl text-xl font-semibold lg:font-semibold mt-12 lg:ml-20 ml-4 absolute z-10">UX Designer</h1>
                        <img className="lg:w-[30vw] w-[45vw] h-[35vh] scale-100 hover:scale-125 ease-in duration-500 cursor-pointer" src="https://thumbs.dreamstime.com/b/modern-office-desk-table-coffee-cup-notebook-smartphone-yellow-background-minimal-style-hipster-workspace-top-view-copy-182686800.jpg" alt="services"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service;