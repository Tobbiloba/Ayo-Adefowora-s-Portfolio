import MenuBar from "./components/Menubar";
import Mainpage from "./components/MainPage";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="bg-black">
     <MenuBar />
     <Mainpage />
     <AboutMe />
    </div>
  );
}

export default App;
