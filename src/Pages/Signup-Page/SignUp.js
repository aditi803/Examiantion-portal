import React,{useState} from 'react'
import './sign-up.css'
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const SignUp = () => {

  const[data,setData]=useState({
   
    });
  
    const chaneHandler = e =>{
      setData({...data,[e.target.name]:e.target.value})
    }
  
    const submitHandler=e=>{
      e.preventDefault()
      console.log('data',data)
      axios.post('https://exam-portal-by-hritik-sanam.herokuapp.com/register',data)
      .then((res)=>{
        console.log(res)
        toast.success("Register Successfully!");
      })
      .catch((err)=>{
        console.log(err)
        toast.error("Error!");
      })
    }

  return (
    <>
    <section className="signup-page">
      <div className="container all-containers my-5">
    <div className="row">
      <div className="col-md-6 left-content">
      <div className="content">
      <h1>Please Sign-up by Enter your Details</h1>
      </div>
      </div>
      <div className="col-md-6 right-content">
     <div className="content">
     <form className='px-5' onSubmit={submitHandler}>
        <div className="">
        <input type="text" onChange={chaneHandler} name='firstName' placeholder="First Name" />
        </div>
        <div className="">
        <input type="text"  onChange={chaneHandler} name='lastName' placeholder="Last Name" />
        </div>
     
      <div className="">
          <input type="text"  onChange={chaneHandler} name='email' placeholder="E-mail" />
        </div>
        <div className="">
          <input type="text"  onChange={chaneHandler} name='mobileNumber' placeholder="Phone Number" />
   </div>
      
        <div className="">
          <input type="text"  onChange={chaneHandler} name='password' placeholder="Password"/>
        </div>
        <div>
          <button className='btn'>Sign-up</button>
        </div>
        <div className='signupLink'>
          <p>Already have an Account?
            <NavLink to='/login'> Login Here</NavLink>
          </p>
        </div>
    </form>
     </div>
      </div>
    </div>
      </div>
    </section>
    <ToastContainer />
        </>
  )
}

export default SignUp