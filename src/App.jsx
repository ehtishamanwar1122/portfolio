import React ,{useState}from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

 const App = () =>{
 
  return(
    <>
    <Navbar />
    <Hero />
    
    <Projects />
    <Footer />
    </>
    
  );
};

export default App;
