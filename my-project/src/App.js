
import React from 'react';
import './App.css';
import Nabbar from './Components/Nabbar';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import SkillPage from './Pages/SkillPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  React.useEffect(() => {
    AOS.init({duration:1000});
  }, [])
  return (
    <div className="App">
        <Nabbar></Nabbar>
        <div data-aos="fade-up"
     data-aos-duration="1000">
        <HomePage></HomePage></div>
        <AboutPage></AboutPage>
        <SkillPage></SkillPage>
        <ProjectPage></ProjectPage>
        <div data-aos="fade-up"
     data-aos-duration="1000">
        <ContactPage></ContactPage></div>
    </div>
  );
}

export default App;
