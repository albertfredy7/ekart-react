import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  const dispatch = useDispatch()

  return (
    <Row className='ms-5 me-3 ' style={{marginTop:'150px'}}> 
      {
        data?.length>0?
        data?.map((item)=>(<Col className=' mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.thumbnail}  style={{height:'200px'}}/>
        <Card.Body>
          <Card.Title>{item.title.slice(0,20)}</Card.Title>
          <p>{item.description.slice(0,40)}...</p>
          <p className='fw-bolder'>Price :₹ {item.price}</p>
          <div className='d-flex align-items-center justify-content-between'>
            <Button variant="outline-danger" onClick={()=>dispatch(addToWishlist(item))} ><i class="fa-solid fa-heart"></i></Button>
            <Button variant="outline-success" onClick={()=>dispatch(addToCart(item))}><i class="fa-solid fa-cart-shopping"></i></Button>
          </div>
        </Card.Body><p></p>
      </Card>
        </Col>))
        
      :
      <p>Nothing to display</p>
      }
    </Row>
  )
}

export default Home