// import React from 'react';

import { Link } from "react-router-dom";
import img from '.././assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Signup = () => {

  const {createUser}=useContext(AuthContext);

const handleSignup=event=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const email=form.email.value;
  const password=form.password.value;
  console.log(name,email,password);
createUser(email,password)
.then(result=>{
  const user=result.user;
  console.log(user);
} )
.catch(error=>{
  console.log(error.message);  
 })

}

  return (
    <div className="mt-3">
    <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row">
  <div className="mr-12 w-1/2">
    <img src={img} alt="" />
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="card-body">
    <h1 className="text-3xl text-center  font-bold">Signup now!</h1>
     <form onSubmit={handleSignup}>
     <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="tetx" name='name' placeholder="name" className="input input-bordered" />
      </div>
     <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input type="password" name='password' placeholder="password" className="input input-bordered" />
        
      </div>
      <div className="form-control mt-6">
       
        <input type='submit' value="Login" className="btn btn-error" />
      </div>

     </form>
     <p>Have an Account  <Link to='/login' 
     className='text-orange-500 font-bold' 
     >Login</Link> </p>
    </div>
  </div>
</div>
</div>
  </div>
  );
};

export default Signup;