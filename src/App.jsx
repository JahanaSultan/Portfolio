import Header from "./components/Header";
import "../src/assets/css/style.css"
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { useEffect } from "react";


function App() {
 
 useEffect(()=>{
  window.scrollTo(0,0)
 })

  return (
    <> 
    
  <Header/>
  <Main/>
  <AboutMe/>
  <Works/>
  <Contact/>

  </>
   
  );
}

export default App;
