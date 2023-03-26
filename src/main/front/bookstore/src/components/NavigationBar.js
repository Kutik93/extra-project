import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavigationBar extends React.Component {
    render() {
         return (
         <Navbar bg="dark" variant="dark">
             <Navbar.Brand href="/">
                <img src="https://cdn-icons-png.flaticon.com/512/1251/1251715.png?w=826&t=st=1679843166~exp=1679843766~hmac=212629bdb09ba0b73eb71a9a1498e9a1b99fa0639e4efaacf2af4854ae73f064" width ="25" height="25" alt="brand" /> Book store</Navbar.Brand>
         <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Add Book</Nav.Link>
                <Nav.Link href="/">Book List</Nav.Link>
         </Nav>
         </Navbar>
         );
    }
}

export default NavigationBar;