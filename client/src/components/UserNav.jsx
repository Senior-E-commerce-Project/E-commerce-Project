import React, { useContext, useState } from "react";
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import context from "../context";

function Navbar() {
  const Context = useContext(context);
  const [searched, setSearched] = useState("");

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <div>
            <InputBase
              onChange={(e) => {
                setSearched(e.target.value);
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              style={{
                color: "white",
                border: "1px solid white",
                borderRadius: "4px",
                padding: "6px 12px",
              }}
            />
            <IconButton
              onClick={() => {
                Context.setQuery(searched);
              }}
              color="inherit"
              style={{ marginLeft: "10px", padding: "10px" }}
            >
              <SearchIcon />
            </IconButton>
          </div>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/signup"
            style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Navbar;
