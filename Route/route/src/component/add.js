import React, { Component } from 'react'
import { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';

import "./style2.css";
import userService from './user.service';


 export default function Add()
  {
    const [user, setUser] = useState({
      id:"",
      userName: "",
      email: "",
      mobile: "",
      address: "",
  });
  const [msg, setMsg] = useState("")

  const handleChange = (e) => {
      const value = e.target.value;
      setUser({ ...user, [e.target.name]: value })
  }
  const RegisterUser = (e) => {
    e.preventDefault();
    console.log(user);
    userService.saveUser(user)
        .then((res) => {
            console.log("User Added Successfully");
            setMsg("Used Added Sucessfully");
            setUser({
                id:"",
                userName: "",
                email: "",
                mobile: "",
                address: "",
            })
        }).catch((error) => {
            console.log(error);
        });
}

  return (
    <div>
      <div className='style2' style={{marginLeft:540,marginTop:70,}}>
        <h1 style={{textAlign:'center',paddingTop:40}}>Add Employee</h1>
        <form style={{textAlign:'center'}} onSubmit={(e)=>RegisterUser(e)}>

              <input type="text" name='id' id="description" placeholder="Enter Id"  style={{marginTop:40}} onChange={(e)=>handleChange(e)} value={user.id}></input><br></br>

                <input type="text" name='userName' id="description" placeholder="Enter Name" style={{marginTop:20}} onChange={(e)=>handleChange(e)} value={user.userName}></input><br></br>

                <input type="text" name='address' id="description" placeholder="Enter Address" style={{marginTop:20}} onChange={(e)=>handleChange(e)} value={user.address}></input><br></br>

                <input type="text" name='mobile' id="description" placeholder="Enter Mobile no" style={{marginTop:20}} onChange={(e)=>handleChange(e)} value={user.mobile}></input><br></br>

                <input type="text" name='email' id="description" placeholder="Enter Email" style={{marginTop:20}} onChange={(e)=>handleChange(e)} value={user.email}></input><br></br>


                
                <button id="btn" style={{marginTop:20,borderRadius:9,backgroundColor:'red',marginBottom:40}} >Submit</button>
            </form>
        
      </div>
      
    </div>
  )
} 

