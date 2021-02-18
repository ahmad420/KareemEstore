import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' CollapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img src='./images/logo1.png' alt='logo' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/Log-In'>
              <Nav.Link>
                <i className='fas fa-user'></i> Log in
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about-us'>
              <Nav.Link>
                {' '}
                <i className='fas fa-info'></i> About us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
