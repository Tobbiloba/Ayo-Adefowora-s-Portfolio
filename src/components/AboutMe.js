import { BiCheckCircle } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";
import { AiOutlineBulb } from "react-icons/ai";
function AboutMe() {
return (
    <div className="flex flex-col h-[100vh] justify-center items-center bg-black w-[100vw] pb-16 lg:pb-0 lg:pt-0 pt-6">
        <div className="flex flex-col-reverse lg:flex-row mr-0 lg:mr-24">
            <div className="flex flex-col  lg:mb-0 mb-10 mr-0 lg:mr-40">
                <h1 className="text-white font-normal mt-16 lg:mt-0 lg:font-bold text-xl lg:text-2xl">ABOUT ME</h1>
                <h1 className="text-slate-300 w-[70vw] lg:w-[29vw] mt-4 text-[15px] lg:text-2xl font-normal">As a highly motivated UX Designer based 
                    in <span className="text-white">Lagos, Nigeria</span>, I bring over 
                    a year experience in the industry to the table.
                    Through my work, I have honed my understanding
                    of user needs and have honed my skills to deliver
                    designs that are both useful and drive business growth.
                    Utilizing tools such as Figma, AdobeXD, Adobe Photoshop,
                    Protopie and others, I strive to create other impressive 
                    and visually appealing designs.
                </h1>
            </div>
            <img className="rounded-full lg:w-[22vw] lg:h-[40vh] w-[40vw] h-[20vh]" src="https://mensline.org.au/wp-content/uploads/2020/05/Excuses-header-1024x683.jpg" alt="profile"/>
        </div>
        <div className="flex flex-row mt-16 mr-0 lg:mr-40">
            <div className="flex flex-col  mr-10 lg:mr-48 items-center">
                <GiAchievement 
                className="lg:w-40 lg:h-32 w-16 h-16" 
                style={{
                    color: "#ffa500",
                    
                }}/>
                <h1 className="text-white text-[15px] text-center lg:text-2xl font-normal lg:font-semibold w-20 lg:w-40 mt-8">1+ Years Experience</h1>
            </div>
            <div className="flex flex-col  mr-10 lg:mr-48 items-center">
                <BiCheckCircle 
                className="lg:w-40 lg:h-32 w-16 h-16" 
                style={{
                    color: "#ffa500",
                }}/>
                <h1 className="text-white text-center text-[15px] lg:text-2xl font-normal lg:font-semibold w-20 lg:w-40 mt-8">10+ Projects Completed</h1>
            </div>
            <div className="flex flex-col items-center">
                <AiOutlineBulb 
                className="lg:w-40 lg:h-32 w-16 h-16" 
                style={{
                    color: "#ffa500",
                }}/>
                <h1 className="text-white text-center text-[15px] lg:text-2xl font-normal lg:font-semibold w-20 lg:w-40 mt-8">3+ Projects Inprogress</h1>
            </div>
        </div>
    </div>
)
}
export default AboutMe;