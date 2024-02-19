import React, { useState, useEffect, useContext } from "react";
import { Button, Typography, Grid, Card, CardContent } from "@mui/material";
import axios from "axios";
import Navbar from "./UserNav.jsx";
import { useNavigate } from "react-router-dom";
import context from "../context.js";

const UserAllProducts = () => {
  const Context = useContext(context);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/Products/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const navigate = useNavigate();

  const navigateToClothes = () => {
    navigate("/Clothes");
  };
  const navigatetoelectronics = () => {
    navigate("/Electronics");
  };
  const navigatetofurnitures = () => {
    navigate("/Furniture");
  };
  const navigatetocosmetics = () => {
    navigate("/cosmetics");
  };
  const navigateToDetails = (productName) => {
    navigate(`/details/${productName}`);
  };

  const filteredData = data.filter((el) =>
    el.ProductName.toLowerCase().includes(Context.query.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div style={{ marginTop: "78px" }}>
            <Typography
              onClick={() => console.log(Context)}
              variant="h6"
              gutterBottom
            >
              Categories
            </Typography>
            <Button fullWidth onClick={navigateToClothes}>
              Clothes
            </Button>
            <Button fullWidth onClick={navigatetoelectronics}>
              Electronics
            </Button>
            <Button fullWidth onClick={navigatetofurnitures}>
              Furnitures
            </Button>
            <Button fullWidth onClick={navigatetocosmetics}>
              Cosmetics
            </Button>
          </div>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2} style={{ paddingTop: "20px" }}>
            {filteredData.map((el, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Card
                  style={{ cursor: "pointer", transition: "transform 0.3s" }}
                  onClick={() => navigateToDetails(el.ProductName)}
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
        </Grid>
      </Grid>
    </div>
  );
};

export default UserAllProducts;
