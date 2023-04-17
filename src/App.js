import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe } from './pages/AboutMe';
import { Experiences } from './pages/Experiences';
import { Projects } from './pages/Projects';
import { TechnicalSkills } from './pages/TechnicalSkills';
import { Education } from './pages/Education';
import { HomePage } from './pages/HomePage';
import { Navbar1 } from './components/Navbar1';
import { ContactMe } from './pages/ContactMe';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar1/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/exp" element={<Experiences/>}/>
        <Route path="/pjs" element={<Projects/>}/>
        <Route path="/tskills" element={<TechnicalSkills/>}/>
        <Route path="/edu" element={<Education/>}/>
        <Route path="/cme" element={<ContactMe/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
