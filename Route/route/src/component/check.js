import React, { Component, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './table.css';

 export default function check() 
 {
  return (
    <div className='tablec' >
        <h1 style={{textAlign:'center'}}>Check Employee Details</h1>
        <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
         <th>Name</th>
          <th>Address</th>
          <th>Email</th>
        <th>Phone</th>
         
        </tr>       </thead>
     </Table> 
      </div>
  )
}


