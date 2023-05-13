// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from 'sweetalert2'
const Bookings = () => {
const {user}=useContext(AuthContext);
const [bookings,setBookings]=useState([]);
const url=`http://localhost:5000/bookings?email=${user?.email}`;

useEffect(()=>{
fetch(url)
.then(res=>res.json())
.then(data=>{
console.log(data);
setBookings(data)
})
},[url])


// 
const handleDelete=id=>{
  const proceed=Swal.fire({
    title: 'Deleted',
    width: 400,
    
    padding: '3em',
    color: 'orange',
    background: 'pink',
    
    
  })
  if (proceed) {
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: "DELETE"
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      const remaining=bookings.filter(book=>book._id !== id)
      setBookings(remaining)
    })
  }
}
// 
const  handleConfirm= id=>{
  fetch(`http://localhost:5000/bookings/${id}`,{
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: "confirm"})
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      if (data.modifiedCount>0) {
        const remaining=bookings.filter(book=>book._id !== id)
        const updated=bookings.find(book=>book._id === id)
        updated.status="confirm";
        const newBooking=[updated,...remaining];
        setBookings(newBooking)
      }
    })
}
// 

return (
<div>
<h1 className="text-5x text-orange-500">Your Bookings: {bookings.length} </h1>

<div className="overflow-x-auto w-full">
<table className="table w-full">
{/* head */}
<thead>
<tr>
<th>
<label>
  <input type="checkbox" className="checkbox" />
</label>
</th>
<th>Image</th>
<th>Service</th>
<th>Date</th>
<th>Price</th>
<th>Status</th>
</tr>
</thead>
<tbody>
{
bookings.map(book=> <BookingRow key={book._id} handleDelete={handleDelete} handleConfirm={handleConfirm} book={book} ></BookingRow>)
}
</tbody>


</table>
</div>
</div>
);
};

export default Bookings;