import React, {useState,useEffect} from 'react'
import { NavLink,useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from '../footer.jsx';


function AdminCat() {

    const [categs,setCategs] = useState([])
    const [refresh,setRefresh] = useState(false)
    const [show,setShow] = useState(0)
    const [name,setName] = useState("")

    let location = useLocation();

  console.log("name" , name)



    useEffect(()=>{
        axios.get('http://localhost:3000').then((res)=>{setCategs(res.data)})
        .catch((err)=>{console.log(err)})
    },[refresh,location])
    
    const deleteCateg = (id) => {
        axios.delete(`http://localhost:3000/`).then((res)=>{setRefresh(!refresh)})
        .catch((err)=>{console.log(err)})
    }

    const updateCateg = (id,newdata) => {
      axios.put(`http://localhost:3000/`,newdata).then((res)=>{setRefresh(!refresh)})
      .catch((err)=>{console.log(err)})
  }

  return (
    <div>
        <div>
<div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
         <NavLink to={'/admin'} >New Category</NavLink>
       <NavLink to={'/admin'}>Back to Admin </NavLink>
       <div>
       <input type="search"
           placeholder='Search Category'
           className='bg-gray-200 p-2 text-xs rounded w-56 h-9 right-10'/>

       </div>
       </div>
       <div className='flex justify-center my-40 bg-white gap-40 items-center text-center rounded-s align-middle' style={{"flex-wrap": "wrap"}}>
      {categs.map((el,i)=>(
        <div key={i} className='flex-wrap grid-cols-5 mb-6   hover:box-content '>
        <img className=' h-40 w-30 shadow-lg rounded-3xl' src={el.CategoryImage} alt="" />
        <h1 className='text-'>{el.NameCategory}</h1>
        <button className='bg-white hover:bg-red text-black rounded w-20 h-9 my-5' onClick={()=>{deleteCateg(el.CategoryID)}}> delete </button>
        <button className='bg-white hover:bg-red text-black rounded w-20 h-9 my-5'  onClick={()=>{setShow(el.CategoryID)}}> Update </button>
      
      
        <div>{show===el.CategoryID && 
        <div className='border'>
           <div className="pt-0 mb-3 my-10">
     <input
          type="text"
          placeholder="Category Name"
          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setName(e.target.value)}}
        />
    </div>

   <button className='hover:shadow-lg hover:bg-white px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-red uppercase rounded shadow' onClick={()=>{updateCateg(el.CategoryID,{NameCategory : name});
   setShow(0)}}> Validate </button>
        </div>
        
        }</div>
        </div>
    ))}
       </div>
    </div> 
        <Footer/>
    </div> 
  )
}

export default AdminCat;