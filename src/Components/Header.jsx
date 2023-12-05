import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  // to access the state of the redux store we use useSelector
  const wishlist = useSelector((state)=>state.wishlistReducer) // here the state represents the store
  console.log(wishlist);

  const cart = useSelector((state)=>state.cartReducer)
  console.log(cart);

  
  return (
    <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:1}} >
      <Container >
        <Navbar.Brand className='text-light' href="/"><Link style={{color:'white',textDecoration:'none'}}  to={'/'}>e-Kart</Link></Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link className='btn border rounded me-5 mt-3  ' style={{color:'white'}} ><Link style={{color:'white',textDecoration:'none'}} to={'/wishlist'}><i class="fa-solid fa-heart me-2"></i> WishList <Badge bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border  rounded me-5 mt-3' style={{color:'white'}} ><Link style={{color:'white',textDecoration:'none'}} to={'/cart'}><i class="fa-solid fa-cart-shopping"></i> Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header