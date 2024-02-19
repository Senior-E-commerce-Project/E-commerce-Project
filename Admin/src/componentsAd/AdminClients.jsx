import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from '../footer.jsx';
import axios from 'axios';

function AdminClients() {
const [clients,setClients]= useState([])
const [refresh,setRefresh] = useState(false)

useEffect(()=>{
    axios.get('http://localhost:3000/allClient').then((res)=>{setClients(res.data)
  console.log(res.data);})
    .catch((err)=>{console.log(err)})
},[refresh])

const deleteclient = (UserId) => {
  axios.delete(`http://localhost:3000/deleteuser/${UserId}`).then(()=>{setRefresh(!refresh)})
  .catch((err)=>{console.log(err)})
}



 return(
    <div>
        
        <nav >
        
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
       <div>
        <div className='grid grid-cols-3 mx-44 justify-center my-40 bg-white gap-40 items-center text-center rounded-s align-middle' style={{"flex-wrap": "wrap"}}>
        {clients.map((el,i)=>(
        <div key={i} className='flex-wrap  mb-6 hover:box-content -mt-28 mr-60 shadow-2xl border-black border rounded w-60 '>
        <h1 className=' font-bold'>{el.username}</h1>
        <h1 className=''>{el.email}</h1>
        <img src={el.image} alt="" />
        <h1 className=''>{el.role}</h1>
        <h1 className=''>ID : {el.id}</h1>
        <button className='bg-red text-white rounded w-40 h-9 my-5'> Send an email </button>
        <br/>
        <DeleteIcon onClick={()=> {deleteclient(el.id)}} /> 
        </div>
    ))}</div>
    </div>
        <div>
        <Footer/>
  
      </div>
      </div>
 )
}

export default AdminClients;