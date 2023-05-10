// import React from 'react';

import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
  const {title,img,price,_id}=service
  return (
    <div>
      <div className="card  w-80 h-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="lol" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p className="text-xl text-orange-500">Price: ${price}</p>
    <div className="card-actions">
  <Link to={`/book/${_id}`}>    <button className="btn btn-error border-l-4 border-l-purple-600 border-r-purple-600 border-r-4">Book Now</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default ServicesCard;