import React,{useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
const SellerCreateProduct = () => {

 const [name,setName]=useState("")
 const [price,setPrice]=useState("")
 const [description,setDescription]=useState("")
 const [category,setCategory]=useState("")
 const [image,setImage]=useState("")

const create=(obj)=>{
  axios.post('http://localhost:3000/Products/post',obj).then(()=>{
    console.log("product is created");
  })
  .catch((err)=>{console.log(err);})
}
// const obj={
//   ProductName:name,
//   ProductPrice:price,
//   ProductDescription:description ,
//   ProductCategory:category,
//   ProductImage1:image
// }



  return (
    <div>
    <nav className="relative container mx-auto p-6 border-b-2 border-black">
        {/* Flex container */}
        <div className="flex items center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <a href="#" className="max-w-md text-black text-3xl font-bold ">
              ShopAholic
            </a>
          </div>
          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <Link
            to="/" href="#" className="hover:text-gray-400">
              Home
            </Link>
            <a
             href="#" className="hover:text-gray-400">
              contact
            </a>
            <a href="#" className="hover:text-gray-400">
            About Us
            </a>
            <Link
            to="/SellerCreateProduct" href="#" className="hover:text-gray-400">
              Create
            </Link>
          </div>
          {/* Button */}
          <button
            to="/Sign"
            className="hidden p-3 px-6 pt-2 text-white bg-black rounded-full baseline hover:bg-gray-400 md:block"
          >
            Log in
          </button>
        </div>
      </nav>
    <div className="container mx-auto p-4 bg-slate-300">
  <h1 className="text-2xl font-bold mb-4">Add Product</h1>
  <form action="#" method="POST" encType="multipart/form-data" className='w-1/2 ml-80'>
    <div className="mb-4">
      <label
        htmlFor="productName"
        className="block text-gray-700 font-bold mb-2"
      >
        Product Name
      </label>
      <input
        type="text"
        id="productName"
        name="productName"
        placeholder="Product Name"
        onChange={(e)=>{setName(e.target.value)}}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="productPrice"
        className="block text-gray-700 font-bold mb-2"
      >
        Price
      </label>
      <input
        type="number"
        id="productPrice"
        name="productPrice"
        placeholder="Product unit Price"
        onChange={(e)=>{setPrice(e.target.value)}}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="productDescription"
        className="block text-gray-700 font-bold mb-2"
      >
        Product Description
      </label>
      <textarea
        id="productDescription"
        name="productDescription"
        placeholder="Description"
        onChange={(e)=>{setDescription(e.target.value)}}
        rows={4}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        defaultValue={""}
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="productCategory"
        className="block text-gray-700 font-bold mb-2"
      >
        Category
      </label>
      <select
        id="productCategory"
        name="productCategory"
        onChange={(e)=>{setCategory(e.target.value)}}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="category1">Electronics</option>
        <option value="category2">Clothes</option>
        <option value="category3">Furniture</option>
        <option value="category4">Cosmetics</option>
      </select>
    </div>
    <div className="mb-4">
      <label
        htmlFor="productImages"
        className="block text-gray-700 font-bold mb-2"
      >
        Product Images
      </label>
      <input
        type="file"
        id="productImages"
        name="productImages[]"
        multiple=""
        accept="image/*"
        className="w-full"
        onChange={(e)=>{setImage(e.target.files[0])}}
      />
    </div>
    {/* <div className="flex mb-4 -mx-2">
      {/* Repeat this div block for each image */}
      {/* <div className="w-1/4 px-2">
        <img
          src="placeholder.jpg"
          alt="Product Image"
          className="w-full h-auto rounded-lg"
        />
      </div> */}
      {/* End of image block */}
    {/* </div> */} 
    <button
    onClick={()=>{create(name,price,description,category)}}
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add Product
    </button>
  </form>
</div>
</div>
  )
}

export default SellerCreateProduct
