import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Favorite = ({UserIdUser}) => {
    const[favorite,SetFavorite]=useState([])
    console.log(UserIdUser);
useEffect(()=>{
         axios.get(`http://localhost:3000/Favorite/getoneu${UserIdUser}`)
        .then(res=>{
          console.log('favorite',res.data)
          SetFavorite(res.data)}).catch(err=>console.log(err))
      },[])
  return (
    <div>
       
        <h1 className='text-gray-300 ml-20 mt-10'>
          Home / <span className='text-black'> FavoriteList</span>
        </h1>
        <div className='mb-20 mt-[35px] ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Image</h1>
        </div>


        {favorite.length&&favorite.map((e,i)=>(
                    <div className='mb-20 mt-28 ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>


        <h1>{e.ProductName}</h1>
        <h1>{e.ProductPrice}$</h1>
        <img className='w-20 mb-10 mr-10' src={e.ProductImage} alt="" />

        </div>

        ))}

    </div>
  )
}
export default Favorite