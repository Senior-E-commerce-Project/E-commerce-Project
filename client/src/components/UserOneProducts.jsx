import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";
import Navbar from "./UserNav.jsx";

const UserOneProduct = () => {
  const [One, setOne] = useState({});
  const { ProductName } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/Products/getone/${ProductName}`)
      .then((res) => {
        console.log(res.data);
        setOne(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ProductName]);

  return (
    <div>
      <Navbar /> 
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {One.ProductName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {One.ProductDescription}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: {One.ProductPrice}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Availability: {One.ProductAvailability ? 'Available' : 'Not Available'}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Category: {One.ProductCategory}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Average Rating: {One.ProductAverageRating}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserOneProduct;
