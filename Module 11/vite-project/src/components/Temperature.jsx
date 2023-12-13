import React from "react";
const temperature=(temp)=>{
    if(temp>30){
        return ("It's hot!")
    }
    else if(temp<20){
        return "It's cool!"

    }
}

const Temperature=()=>{
return(
    <div>
    <h2>{temperature(-33)}</h2>
        
        

    </div>
)

}
export default Temperature;
