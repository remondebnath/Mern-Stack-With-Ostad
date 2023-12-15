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

let [FormObj,SetFormObj]=useState({ fName:"", lName:"",city:"",gender:""})

const onInputChange=(props,value)=>{

  SetFormObj(prevObj=>({
    ...prevObj,
    [props]:value}
    ))
}
const formSubmit=(e)=>{
  e.preventDefault();

  console.log(FormObj);
  alert("Form submitted")


}




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

        <form onSubmit={formSubmit}>
          <p>{FormObj.fName +" "+FormObj.lName+" "+FormObj.city+" "+FormObj.gender}</p>

          <input onChange={(e)=>{onInputChange("fName",e.target.value)}} value={FormObj.fName} placeholder="John"/><br/>
          <input  onChange={(e)=>{onInputChange("lName",e.target.value)}} value={FormObj.lName}  placeholder="Doe"/><br/>
          <select onChange={(e)=>{onInputChange("city",e.target.value)}}  value={FormObj.city} >
            <option value="">Choose City</option>
            <option value="dhaka" >Dhaka</option>
            <option  value="noakhali"  >Noakhali</option>
          </select><br/>
          <input onChange={()=>{onInputChange("gender","male")}} checked={FormObj.gender==="male"} type="radio" name="male"/>Male<br/>
          <input onChange={()=>{onInputChange("gender","female")}} checked={FormObj.gender==="female"}type="radio" name="male"/>Female<br/>
          <button >Submit</button>






        </form>


      </div>
    


  )

}


export default App;
