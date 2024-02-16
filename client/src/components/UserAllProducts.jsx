import React, { useState, useEffect } from "react";
import { Button, Typography, Grid } from "@mui/material";
import axios from "axios";
import Navbar from "./UserNav.jsx";
import { useNavigate } from "react-router-dom";

const UserAllProducts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Utilize the useNavigate hook

  useEffect(() => {
    axios.get("http://localhost:3000/Products/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const navigateToClothes = () => {
    navigate("/Clothes");
  };

  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div style={{ marginTop: "78px" }}> 
            <Typography variant="h6" gutterBottom>
              Categories
            </Typography>
            <Button fullWidth onClick={navigateToClothes}>Clothes</Button> 
            <Button>Electronics</Button>
            <Button>Furnitures</Button>
            <Button>Cosmetics</Button>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div > 
            {data.map((el, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default UserAllProducts;
