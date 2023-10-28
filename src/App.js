import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner"
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
