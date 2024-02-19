import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SellerHome = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState([]);
  const [newdata, setNewdata] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/Products/getAll")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(product);

  const deleted = (idProduct) => {
    axios
      .delete(`http://localhost:3000/Products/delete/${idProduct}`)
      .then(() => {
        console.log("is ddeleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetOne = (ProductName) => {
    axios
      .get(`http://localhost:3000/getOne/${ProductName}`)
      .then((res) => {
        setSearch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <nav className="relative container w-screen  p-6 ">
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
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              contact
            </a>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <Link
              to="/SellerCreateProduct"
              href="#"
              className="hover:text-gray-400"
            >
              Create
            </Link>
          </div>
          <div className=" ">
            <input
              type="text"
              className="mt-2 border-2 border-black placeholder:text-gray-400"
              placeholder="search about... " 
              defaultValue=""
              onChange={(e) => setNewdata(e.target.value)}
            />
            <button
              className="bg-black text-white"
              type="button"
              onClick={() => {
                GetOne(newdata);
              }}
            >
              Chercher
            </button>
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
      <div >
        <img className="mx-auto w-screen border-t-4 border-black" src="https://www.business2community.com/wp-content/uploads/2020/11/ecommerce-2140603_1920-1.jpg" alt="#" />
      </div>
      <div>
        <div className='grid grid-cols-3 mx-44 justify-center my-40 bg-white gap-40 items-center text-center rounded-s align-middle' style={{"flex-wrap": "wrap"}}>
        {product.map((e,i)=>(
        <div key={i} className='flex-wrap  mb-6 hover:box-content -mt-28 mr-60 shadow-2xl  rounded w-60 '>
        <h1 className=' font-bold text-red-600'>{e.ProductName}</h1>
        <h1 className=''>{}</h1>
        <img src={e.ProductImage1} alt="" />
        <h1 className='font-bold'>{e.description}</h1>
        <h1 className='font-bold'>$ {e.ProductPrice} </h1>
        <br/>
        <button onClick={()=> {deleted(e.idProduct)
        window.location.reload();}} className="rounded bg-red-600 text-white" > delete</button>
        </div>
    ))}</div>
    </div>
      {/* <div className="grid grid-cols-3 gap-x-10 gap-y-10 mx-10 mt-20 ">
        {product.map((e) => (
          <div className="h-60 bg-slate-400  ">
            <div className="mt-0 w-80 "><img src={e.ProductImage1} alt="" /> </div>
            <div className="flex flex-row">
            <div>{e.ProductName}</div>
            <div>{e.ProductPrice}</div>
            <div>{e.ProductAvailability}</div>
            <div>{e.ProductCategory}</div>
            </div>
            <div>
              <button
                onClick={() => {
                  deleted(e.idProduct);

                  window.location.reload();
                }}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-400"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SellerHome;
