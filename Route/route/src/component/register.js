import React, { Component,userService }from 'react'
//import userService from './service/user.service';

export default function register() {
  return (
    <div>
        <div className='style2' style={{marginLeft:500,marginTop:50,paddingLeft:30,paddingBottom:50}}>
               <form >
               <h3 style={{marginTop:80,color:'red',textAlign:'center'}}>Registration</h3>
              <b>Name</b>  <input style={{marginTop:20,fontFamily:'sans-serif',width:177,marginLeft:30}} type='text' /><br></br>

      
               Username <input style={{marginTop:20,fontFamily:'sans-serif'}} type='text' /><br></br>

               Password  <input style={{marginTop:10,marginLeft:4,width:177}}  type='password' /><br></br>

             <b><input style={{margin:20,marginLeft:80,borderRadius:9,width:100,borderColor:'red'}} type="submit"/></b>
             <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <a href="/login" style={{color: '#393f81'}}>login</a></p>

          </form>
          </div>
        
      </div>
  )
}
