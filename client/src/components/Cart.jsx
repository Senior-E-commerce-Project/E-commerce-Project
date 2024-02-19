
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Cart({UserIdUser}) {
  const [product, setProduct] = useState([]);
  const[cartData,setCartData]=useState([])
const navigate=useNavigate()


useEffect(() => {
    axios.get(`http://localhost:3000/Carts/getAll`)
      .then((res) => {
        console.log('this is cart data', res.data);
        setCartData(res.data);
       
      })
      .catch((error) => console.log(error));
  }, [])
  const deleted = (UserIdUser) => {
    console.log('delete:', UserIdUser);
    axios.delete(`http://localhost:3000/Carts/delete/${UserIdUser}`)
      .then((res) => {
        console.log(res.data)  
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  useEffect(() => {
    axios.get(`http://localhost:3000/Carts/getoneu/${UserIdUser}`)
      .then((res) => {
        console.log('this is from user', res.data);
        setProduct(res.data);
       
      })
      .catch((error) => console.log(error));
  }, [])

  const calculate = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div>
 
      <div className='ml-40 mt-20'>
        <h1 className='text-gray-300'>
          Home / <span className='text-black'> Cart</span>
        </h1>

        <div className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 '>
          <h1 className='ml-20'>Product</h1>
          <h1 className='ml-20'>Price</h1>
          <h1 className='ml-20'>Quantity</h1>
          <h1 className='ml-10'>Subtotal</h1>
        </div>
{console.log('this is cartdata',product)}
        {product.map((item, i) => (
          <div key={i} className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 ' style={{'display':'flex','justifyContent':'space-around'}}>
            <img className='w-10 ml-10' src={item.ProductImage} alt="" />
            <h1 className='ml-10'>{item.ProductPrice}</h1>
            <input
              className='w-10 ml-10 border-gray-300 border rounded'
              type="number"
              value={item.quantity || 1}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value);
                setProduct(prevData => {
                  const newData = [...prevData];
                  newData[i].quantity = isNaN(newQuantity) ? 1 : newQuantity;
                  return newData;
                });
              }}
            />
            <h1 className='ml-20'>{calculate(item.quantity || 1, item.Price)}$</h1>            
          </div>
          
        ))}
{/* 

        <div className='mt-20 '>
          <input className='border-gray-300 border rounded w-48 h-12 text-center text-sm' type="text" placeholder='Coupon Code' />
          <button className='ml-3 bg-red w-40 h-12 border rounded text-white text-sm'>Apply Coupon</button>
        </div> */}

        <div className='float-right -mt-30 mr-56  shadow border-black border rounded w-80  text-start  '>
          <h1 className='ml-2 mt-2'>Cart Total</h1>
          <h3 className='ml-5 mt-6'>Subtotal: {cartData.reduce((total, item) => total + calculate(item.quantity || 1, item.Price), 0)}$</h3>
          <hr className="text-gray-300 w-5/6 text-center" />
          <hr className="text-gray-300 w-5/6" />
          <h3 className='ml-5 mt-6'>Total: {cartData.reduce((total, item) => total + calculate(item.quantity || 1, item.Price), 0)}$</h3>
          <button
           className='shadow border-gray-300 border rounded ml-20 bg-red text-white w-40 h-12 mt-4'>Proceed to checkout</button>
        </div>
      </div>
   
    </div>
  );
}

export default Cart;
// const addwish=(obj)=>{
//     axios.post('http://localhost:3000/Favorite/post',obj)
//     .then(r=>console.log('addded')).catch(err=>console.log(err))
//   }
//   const addCart=(obj)=>{
//     axios.post("http://localhost:3000/cart/post",obj).then((res)=>{console.log(res)})
//     .catch((err)=>console.log(err))
//   }