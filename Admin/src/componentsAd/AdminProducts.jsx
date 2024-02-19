import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';
import { GrUpdate } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { Style } from '@mui/icons-material';


function AdminProducts() {
  const [adminData, setAdminData] = useState([]);
  const [adminimg, setAdminimg] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/allproducts')
      .then((result) => {
        setAdminData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  useEffect(() => {
    axios
      .get('  http://localhost:3000/images')
      .then((result) => {
        setAdminimg(result.data[0].image);
        console.log("img",result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);



 
  const deleteProd = (ProductID) => {
    axios
      .delete(`http://localhost:3000/deleteprod/${ProductID}`)
      .then(() => {
        console.log('deleted');
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const modify = (id) => {
    axios
      .put(`http://localhost:3000/updateProd/${id}`)
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
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
        {adminData.map((el,i)=>(
        <div key={i} className='flex-wrap  mb-6 hover:box-content -mt-28 mr-60 shadow-2xl border-black border rounded w-60 '>
        <h1 className=' font-bold'>{el.name}</h1>
        <h1 className=''>{}</h1>
        <img src={adminimg} alt="" />
        <h1 className='font-bold'>{el.description}</h1>
        <h1 className='font-bold'>price :$ {el.price} </h1>
        
        <button className='bg-red text-white rounded w-40 h-9 my-5'> Send an email </button>
        <br/>
        <DeleteIcon onClick={()=> {deleteProd(el.id)}} /> 
        </div>
    ))}</div>
    </div>
        


    </div>
  )
      }   

export default AdminProducts;

    