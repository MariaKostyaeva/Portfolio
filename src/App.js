import './assets/reset.styles.css';
import './assets/main.styles.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/aboutMe";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
        <AboutMe/>
      <ProjectList/>
    </div>
  );
}

export default App;
