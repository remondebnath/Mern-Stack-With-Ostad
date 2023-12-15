import React, { useState } from "react";
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

let [FormObj,SetFormObj]=useState({ fName:"", lname:"",city:"",gender:""})




  return(
    
    /* <Header/>
      <Hero/>
      <Service/>
      <Project/>
      <About/>
      <Footer/>
      <Person name="Remon"/>
      <Greetings/>
      <Temperature/>
      <Message dayOfWeek={new Date().getDay()}/> */


      <div>

        <form>

          <input placeholder="First Name"/><br/>
          <input placeholder="Last  Name"/><br/>
          <select>
            <option value="">Choose City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Noakhali">Noakhali</option>
          </select><br/>
          <input type="radio" value="male"/>Male<br/>
          <input type="radio" value="male"/>Female<br/>
          <button>Submit</button>






        </form>


      </div>
    


  )

}


export default App;
