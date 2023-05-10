// import React from 'react';

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
const { title,price,_id } = service;
const {user}=useContext(AuthContext)
const bookService=event=>{
event.preventDefault();
const form=event.target;
const name=form.name.value;
const date=form.date.value;
const email=user?.email;
const order={
  customerName: name,
  email,
  date,
  service: _id,
  price: price
}
console.log(order);
}
  return (
    <div>

<h2 className="text-center">Book Service: {title}</h2>    
    <div className="card-body">
    <form onSubmit={bookService}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="form-control">
    <label className="label">
    <span className="label-text">Name</span>
    </label>
    <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
    </div>
    <div className="form-control">
    <label className="label">
    <span className="label-text">Date</span>
    </label>
    <input type="date" name="date" className="input input-bordered" />
    </div>
    <div className="form-control">
    <label className="label">
    <span className="label-text">Email</span>
    </label>
    <input type="email" name="email"
     defaultValue={user?.email} placeholder="email" className="input input-bordered" />
    
    </div>
    <div className="form-control">
    <label className="label">
    <span className="label-text">Due Amount</span>
    </label>
    <input type="text" defaultValue={`$`+price}  className="input input-bordered" />
    
    </div>
    </div>
    
    <div className="form-control mt-6">
    
    <input type="submit" className="btn btn-block" value={"Order Confirm"} />
    </div>
    </form>
    </div>
    </div>
  );
};

export default BookService;