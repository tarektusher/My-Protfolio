
import './App.css';
import Nabbar from './Components/Nabbar';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import SkillPage from './Pages/SkillPage';
function App() {
  return (
    <div className="App">
        <Nabbar></Nabbar>
        <HomePage></HomePage>
        <AboutPage></AboutPage>
        <SkillPage></SkillPage>
    </div>
  );
}

export default App;
