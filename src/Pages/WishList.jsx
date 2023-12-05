import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handlewishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }


  
  return (
    <div style={{marginTop:'150px'}}>
      <Row className='ms-5'>
        { wishlistArray?.length>0?
        wishlistArray?.map((item) => (
          <Col className=' mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.thumbnail}  style={{height:'200px'}}/>
        <Card.Body>
          <Card.Title>{item.title.slice(0,20)}</Card.Title>
          <p>{item.description.slice(0,40)}...</p>
          <p className='fw-bolder'>Price :₹ {item.price}</p>
          <div className='d-flex align-items-center justify-content-between'>
            <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishlist(item.id))} ><i class="fa-solid fa-trash"></i></Button>
            <Button variant="outline-success"><i class="fa-solid fa-cart-shopping" onClick={()=>handlewishlist(item)}></i></Button>
          </div>
        </Card.Body><p></p>
      </Card>
          </Col>
        ))
          
        :
        <div style={{height:'50vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://www.matahari.com/static/version1701136719/frontend/Matahari/matahari-child/id_ID/images/cart-empty.gif"  alt="" />
          <h3>Wishlist is empty</h3>
          <Button  className='mt-3' variant='dark'><Link to={'/'}style={{textDecoration:'none',color:'white'}}> <i class="fa-solid fa-arrow-left"></i> Back to Home</Link></Button>
        </div>
        }
      </Row>
    </div>
  )
}

export default WishList