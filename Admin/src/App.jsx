import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import Footer from '../footer.jsx';

import image from '../admin/ecommerce-dashboard.png'

function Admin() {
 
 

  const [products,setProducts] =useState([])
 


  const fetchData = () => {
    axios.get('http://localhost:3000/allproducts')
    .then((result) => {
        setProducts(result.data)
    
    })
    .catch((err) => { console.log(err)})

 
   }
  
useEffect(() => {
  fetchData()
},[])



  return (
    <div>
        <nav >
        
        <div className='bg-black'>hello</div>
        <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
          <NavLink to={'/admin'} >Administration</NavLink>
        <NavLink to={'/AdminClients'}>Clients</NavLink>
        <NavLink to={'/AdminSellers'}>Sellers</NavLink>
        <NavLink to={'/AdminCategories'}>Categories</NavLink>
        <NavLink to={'/AdminProducts'}>Products</NavLink>
        <div>
        <input type="search"
            placeholder='What are you looking for?'
            className='bg-gray-200 p-2 text-xs rounded w-56 h-9 right-36'/>
              <IoSearchOutline size={25} className='absolute right-10 top-7'/>
        </div>
        </div>
       </nav>
       <img   style={{ width: '100%'}} src={image} alt="" />
      
     
      <Footer/>


    </div>
  )
}

export default Admin