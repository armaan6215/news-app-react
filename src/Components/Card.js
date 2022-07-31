import React from "react";

export default function Card(props) {
  let {title, description, imageUrl, author} = props;
  return (
    <div className="my-3">
      <div>
    <img src={imageUrl} className="card-img-top d-flex"  alt="..."/>
      </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href="/" className="btn btn-sm btn-primary">Details</a>
      <div className="flex flex-row-reverse row"> 
       <h6 className="card-text">by {author}</h6>
      </div>
    </div>
  </div>
  );
}
