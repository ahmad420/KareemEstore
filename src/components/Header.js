import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' CollapseOnSelect>
        <Navbar.Brand href='/'>
          <img src='./images/logo1.png' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/signin'>
              <i className='fas fa-user'></i> Log in
            </Nav.Link>
            <Nav.Link href='/Aboutus'>
              {' '}
              <i className='fas fa-info'></i> About us
            </Nav.Link>
            <Nav.Link href='/cart'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
          <img src='./images/logo1.png' alt='logo' />
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav>
        <Navbar.Collapse id='basic-navbar-nav'>
          
        </Navbar.Collapse>
      </Navbar> */}
    </header>
  )
}

export default Header
