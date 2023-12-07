
import './App.css';
import Nabbar from './Components/Nabbar';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import SkillPage from './Pages/SkillPage';
function App() {
  return (
    <div className="App">
        <Nabbar></Nabbar>
        <HomePage></HomePage>
        <AboutPage></AboutPage>
        <SkillPage></SkillPage>
        <ProjectPage></ProjectPage>
        <ContactPage></ContactPage>
    </div>
  );
}

export default App;
