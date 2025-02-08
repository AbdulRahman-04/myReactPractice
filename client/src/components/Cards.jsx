import React from "react";
import image from "../assets/download.png"
const Cards = (props) => {
  return (
    <>
      <div className="cards w-full h-full   bg-white-500 flex align-center justify-around mt-45">

        <div className="cards w-50 h-60 text-center pt-35 rounded bg-white flex-column align-center justify-center">
        {/* <img src={image}  /> */}
          <h4>{props.name}</h4>
          <h4>{props.age}</h4>
          <h4>{props.city}</h4>
        </div>

        <div className="cards w-50 h-60 text-center pt-35  rounded bg-white">
        {/* <img src={image} /> */}
          <h4>{props.name}</h4>
          <h4>{props.age}</h4>
          <h4>{props.city}</h4>
        </div>
        <div className="cards w-50 h-60 text-center pt-35 rounded bg-white">
            {/* <img src={image} /> */}
          <h4>{props.name}</h4>
          <h4>{props.age}</h4>
          <h4>{props.city}</h4>
        </div>
      </div>
    </>
  );
};

export default Cards;
