import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'



const Header = () => {
  return (
    <div>
      {/* <Link to="/add">Add Product</Link> */}

        <Navbar  bg="dark" variant="dark" className="pl-5">
         
            <Navbar.Brand to="/">Student Management</Navbar.Brand>
            <Nav className=" mx-3 nav_bar_wrapper">
              <Link className="mx-3" to="/">Home</Link>
              <Link className="mx-3" to="/add">Add Student</Link>
              {/* <Link className="mx-3"  to="/register">Register</Link> */}
              <Link className="mx-3" to="/productlist">Student List</Link>

            </Nav>
         
        </Navbar>

        </div >
      )
}

      export default Header
