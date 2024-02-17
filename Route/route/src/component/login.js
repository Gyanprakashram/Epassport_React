//import React from 'react';
import "./style2.css";

 
import React from 'react'

function login() {
  return (
    <div className='style2' style={{marginLeft:500,marginTop:50,paddingLeft:30,paddingBottom:50}}>
    <form >
    <h1 style={{marginTop:80,color:'red',textAlign:'center'}}>Login Page</h1>

    Username <input style={{marginTop:20,fontFamily:'sans-serif'}} type='text' /><br></br>
    Password  <input style={{marginTop:10,marginLeft:4,width:177}}  type='password' /><br></br>

  <b><input style={{margin:20,marginLeft:80,borderRadius:9,width:100,borderColor:'red'}} type="submit"/></b>
  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/register" style={{color: '#393f81'}}>Register here</a></p>

</form>
</div>
  )
}

export default  login;
