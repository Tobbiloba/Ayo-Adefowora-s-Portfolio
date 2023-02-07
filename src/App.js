import MenuBar from "./components/Menubar";
import Mainpage from "./components/MainPage";
import AboutMe from "./components/AboutMe";
import Service from "./components/Service";
import Motto from "./components/Motto";
import CaseStudy from "./components/CaseStudy";
function App() {
  return (
    <div className="bg-black">
     <MenuBar />
     <Mainpage />
     <AboutMe />
     <Service />
     <Motto />
     <CaseStudy />
    </div>
  );
}

export default App;
