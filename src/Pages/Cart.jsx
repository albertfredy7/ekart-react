import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {

  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlecheckout = ()=>{
    
    alert('Your order has been placed')
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <div style={{marginTop:'100px'}}>
      <div className='row w-100'>
      { cartArray?.length>0?
        <div className='col-lg-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {
              cartArray?.map((item,index)=>(<tbody className='p-5'>
                <tr>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><img src={item.thumbnail} className='rounded' width={100} alt="" style={{height:'5rem'}} /></td>
                  <td> ₹ {item.price}</td>
                  <td>
                    <Button variant="outline-danger" onClick={()=>dispatch(removeFromCart(item.id))}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>))
              }
          </table>
        </div>
        :
        <div style={{height:'50vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
        <h3>Your Cart is empty</h3>
        <Button  className='mt-3' variant='dark'><Link to={'/'}style={{textDecoration:'none',color:'white'}}> <i class="fa-solid fa-arrow-left"></i> Back to Home</Link></Button>
      </div>
        }
        
        
        {cartArray?.length > 0 && (
          <div className='col-lg-4 m-5'>
            <div className='card shadow border' style={{background:'#f0f0f0'}}>
              <div className='card-body'>
                <h5 className='card-title text-center'>Order Summary</h5>
                <hr />
                <ul className='list-group'>
                  {cartArray?.map((item, index) => (
                    <li key={index} className='list-group-item' style={{background:'none'}}> 
                      <div className='d-flex justify-content-between text-dark fw-bold'>
                        <span >{item.title}</span>
                        <span>₹ {item.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <hr />
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <h6>Total:</h6>
                  <h6>₹ {cartArray.reduce((total, item) => total + item.price, 0)}</h6>
                </div>
                <div className='d-flex '>
                  <Button variant='primary' className=' w-100 ms-auto mt-5' onClick={handlecheckout}>
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        
      </div>
    </div>
  )
}

export default Cart