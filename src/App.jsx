import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/home';
import Projects from './pages/projects';
import AboutMe, { AboutContent, AboutSection, TechnologyPage } from "./pages/about-me";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <HashRouter>
        <NavBar></NavBar>
        <main className="app-content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/projects" element={<Projects/>}/>
            <Route path="/about-me" element={<AboutMe/>}>
              <Route index element={<AboutContent/>}/>
              <Route path="technology" element={<TechnologyPage/>}/>
              <Route path="homebrewing" element={<AboutSection title="Homebrewing"/>}/>
              <Route path="travel" element={<AboutSection title="Travel"/>}/>
            </Route>
          </Routes>
        </main>
      </HashRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
