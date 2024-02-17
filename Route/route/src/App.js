import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Add from './component/add';
import Check from './component/check';
import Login from './component/login';
import Register from './component/register';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';


function App() {
  return (
     <Router>
        <div className="App">
            
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Sirish tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{paddingLeft:360}}>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/add">Add Emp</Nav.Link>
            <Nav.Link href="/check">Check Emp</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/add' element={< Add />}></Route>
                <Route exact path='/check' element={< Check />}></Route>
                <Route exact path='/login' element={< Login />}></Route>
                <Route exact path='/register' element={<Register />}></Route>

        </Routes>
        </div>
    </Router>
   
  )
}
export default App;

