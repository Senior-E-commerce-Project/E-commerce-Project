import React, { useState, useEffect } from "react";
import "../SignUp.css";
import axios from "axios"; 
import {Link} from 'react-router-dom'


const SignUp = () => {
  const [error, setError] = useState("");
  const [nameU, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confrimPassword,setConfrim]=useState('')
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [role,setRole]=('client')

  const create =(nameU,email,password,photo,location)=> {
    axios.post("http://localhost:3000/admin/SignUp", {
        UserName: nameU,
        UserEmail: email,
        UserPassword: password,
        UserPhoto: photo,
        UserRole: role,
        token: "try",
      })
      .then((response) => {
        if (response.data === "Internal Server Error") {
          setError("Check your inputs");
        } else {
          setError("Enjoy your time here");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />

        {/* <label>
        Confirm Password:
        <input type="password" name="Confrim password" required onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
      </label>
      <br />  */}

        <label>
          Photo URL:
          <input
            type="text"
            name="photoUrl"
            onChange={(e) => {
              setPhoto(e.target.value);
            }}
          />
        </label>
        <br />
      
        <label>
          Location:
          <input
            type="text"
            name="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Select Role:
          <select name="role" required>
            <option value="client">Client</option>
            <option value="seller">Seller</option>
          </select>
        </label>
        <br />
        <button
          onClick={()=>{create({
            nameU,
            email,
            password,
          })}} 
        > <Link to='/SignIn' >Register </Link> </button>
      </form>
    </div>
  );
};

export default SignUp;
