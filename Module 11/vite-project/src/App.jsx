import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import Person from "./components/person";
import Greetings from "./components/Greetings";
import Temperature from "./components/Temperature";
import Message from "./components/Message";





const App =()=>{

  return(
    <div>
      <Header/>
      <Hero/>
      <Service/>
      <Project/>
      <About/>
      <Footer/>
      <Person name="Remon"/>
      <Greetings/>
      <Temperature/>
      <Message dayOfWeek={new Date().getDay()}/>

    </div>
    


  )

}


export default App;
