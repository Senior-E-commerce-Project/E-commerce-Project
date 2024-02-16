import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from "@mui/material";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>
          </Typography>
          <div style={{ flexGrow: 1, marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ color: 'white', border: '1px solid white', borderRadius: '4px', padding: '6px 12px' }}
            />
            <Button color="inherit" style={{ marginLeft: '10px' }}>
              Search
            </Button>
          </div>
          <Button color="inherit" component={Link} to="/login" style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }}>
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup" style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar /> 
    </div>
  );
}

export default Navbar;
