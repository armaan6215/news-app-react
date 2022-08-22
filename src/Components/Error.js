import React from "react";
import spinner from "../spinner.gif"

export default function Error(props) {
  if(props.errors!==0){
  console.log("props:", props.errors)
  return (
    <div className="container text-danger ">
        <h1 style={{marginTop:"25%"}}>
            {props.errors}
        </h1>
    </div>
  );
} else{
  console.log("props:", props.errors)
  return (
    <div className="container">
      <div>
      <img src={spinner} alt="" className="img text-center"/>
      </div>
      Loading
        {/* <h1 style={{marginTop:"25%"}}>
            An error occured. Please check your internet connectivity.
        </h1> */}
    </div>
  );
}
}