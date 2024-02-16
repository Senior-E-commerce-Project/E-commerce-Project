import React,{useState,useEffect} from "react";
import axios from 'axios'

const UserClothes=()=>{
    const [clothes,setClothes]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/Products/getAll/Clothes").then((res)=>{
            setClothes(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    
    return (
        <div>
              <div>
        {clothes.map((el) => (
          <div  style={{ marginBottom: "20px" }}>
            <h3>{el.ProductName}</h3>
            <p>{el.ProductDescription}</p>
            <p>Price: ${el.ProductPrice}</p>
            <p>
              Availability: {el.ProductAvailability ? "Available" : "Unavailable"}
            </p>
            <p>Category: {el.ProductCategory}</p>
            <p>Average Rating: {el.ProductAverageRating}</p>
          </div>
        ))}
      </div>

        </div>
    )

}

export default UserClothes