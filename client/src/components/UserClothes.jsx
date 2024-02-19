import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Navbar from "./UserNav.jsx";

const UserClothes = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Products/getAll/Clothes")
      .then((res) => {
        setClothes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Grid container spacing={2} style={{ paddingTop: "20px" }}>
        {clothes.map((el, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{ cursor: "pointer", transition: "transform 0.3s" }}
              // Assuming you have a route to navigate to the details page
              // onClick={() => navigateToDetails(el.ProductName)}
              sx={{ "&:hover": { transform: "scale(1.05)" } }}
            >
              <CardContent>
                <Typography variant="h6">{el.ProductName}</Typography>
                <Typography>{el.ProductDescription}</Typography>
                <Typography>Price: ${el.ProductPrice}</Typography>
                <Typography>
                  Availability:{" "}
                  {el.ProductAvailability ? "Available" : "Unavailable"}
                </Typography>
                <Typography>Category: {el.ProductCategory}</Typography>
                <Typography>
                  Average Rating: {el.ProductAverageRating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserClothes;
