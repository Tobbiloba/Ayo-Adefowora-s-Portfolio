import MenuBar from "./components/Menubar";
import Mainpage from "./components/MainPage";
import AboutMe from "./components/AboutMe";
import Service from "./components/Service";
function App() {
  return (
    <div className="bg-black">
     <MenuBar />
     <Mainpage />
     <AboutMe />
     <Service />
    </div>
  );
}

export default App;
