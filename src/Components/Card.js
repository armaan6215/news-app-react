import React from "react";

export default function Card(props) {
  let {title, description, imageUrl, author} = props;
  return (
    <div className="my-3">

    <div className="card">
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <div className="container d-flex">
    <a style={{width:"25%", height:"30px"}} href="#" className="btn btn-sm btn-primary mr-5">Details</a>
    <div className="ml-5 d-flex">
    source: <h5>{author}</h5>
    </div>
    </div>
    </div>
  </div>
</div>
);
  }
