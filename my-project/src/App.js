
import './App.css';
import Nabbar from './Components/Nabbar';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
function App() {
  return (
    <div className="App">
        <Nabbar></Nabbar>
        <HomePage></HomePage>
        <AboutPage></AboutPage>
    </div>
  );
}

export default App;
