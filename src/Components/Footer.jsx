import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer d-flex align-items-center justify-content-center flex-column bg-primary text-light p-5'>
      <div className="footer d-flex align-items-center justify-content-evenly w-100 flex-wrap">
        <div className="website flex-sm-column" style={{ width: '400px' }}>
          <div className='d-flex flex-row align-items-center gap-2'>
            <i className="fa-solid fa-cart-shopping fa-2x"></i>{'  '}
            <h4 style={{ color: 'white', fontSize: '24px' }}>E- KART</h4>
          </div>
          <h6 className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nisi saepe consequatur illo possimus quis nihil itaque voluptatem, ullam ex earum aut ad nam, sunt provident.</h6>
        </div>
        <div className="link d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
          <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>WishList</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>Bootswatch</Link>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className="d-flex mb-3">
            <input type="text" className='form-control w-100' placeholder='Enter your email id' />
            <button className='btn btn-warning ms-3 w-100'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly mt-2'>
            <Link style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-instagram fa-2x"></i></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-facebook fa-2x"></i></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-linkedin fa-2x"></i></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-twitter fa-2x"></i></Link>
          </div>
        </div>
      </div>
      <p className='mt-5'>Copyright © 2023  E-KART. Build with react</p>
    </div>
  )
}

export default Footer