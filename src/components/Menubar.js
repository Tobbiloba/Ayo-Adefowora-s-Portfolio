function MenuBar() {
  return (
    <div className="px-32 justify-between flex flex-row bg-black py-2">
        {/* <h1 className="text-white text-3xl font-bold">J<span className="font-2xl font-black mr-8">unior</span><span>.</span></h1> */}
        <div className="flex flex-row">
            <h1 className="text-4xl text-white font-bold">J</h1>
            <h1 className="text-2xl text-white font-semibold">unior</h1>
            <div className="w-2 h-2 bg-orange-500 mt-4 ml-1 rounded-full"></div>
        </div>
        <div className="flex flex-row items-center">
            <h1 className="text-white mr-8 font-medium cursor-pointer">Home</h1>
            <h1 className="text-white mr-8 font-medium cursor-pointer">Case Studies</h1>
            <h1 className="text-white mr-8 font-medium cursor-pointer">Resume</h1>
            <h1 className="text-white mr-8 font-medium cursor-pointer">Contact me</h1>
        </div>
    </div>
  );
}

export default MenuBar;