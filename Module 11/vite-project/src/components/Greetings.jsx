import React from "react"
const isGreeting=true;
const greetings=()=>{
 return(
    <div>{
        isGreeting? <h6>"Hello, World"!</h6>:
        <h6>"Goodbye" </h6>
        }

        
    </div>
 )
}
export default greetings;