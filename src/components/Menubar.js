function MenuBar() {
  return (
    <div className="px-2 lg:px-32 justify-between items-center flex flex-row bg-black lg:pt-2 pt-4 fixed top-0 w-[100vw]">
        <div className="flex flex-row ml-4 lg:ml-0">
            <h1 className="text-4xl text-white font-bold">J</h1>
            <h1 className="text-2xl text-white font-semibold">unior</h1>
            <div className="w-2 h-2 bg-orange-500 mt-4 ml-1 rounded-full"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-end">
            <h1 className="text-white mr-8 font-medium cursor-pointer">Home</h1>
            <h1 className="text-white mr-8 font-medium cursor-pointer">Case Studies</h1>
            <h1 className="text-white mr-8 font-medium cursor-pointer">Resume</h1>
            <h1 className="text-white mr-8 font-medium cursor-pointer">Contact me</h1>
        </div>
    </div>
  );
}

export default MenuBar;