import React from 'react'
import { useState } from 'react';
import axios  from 'axios';
// // import { useAuth } from './AuthToken';


const SignIn = () => {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error,setError] = useState('')
// // const { setAuthToken } = useAuth();



const connectAdmin = (email,password,error)=>{

        axios.post(`http://localhost:3000/SginIn`, {
          Useremail: email,
          Userpassword: password
        })
          .then((res) => {
            const token = res.data.token;
      
            if (res.data === 'User not found') {
             setError('User not found');
            } else if (res.data === 'Incorrect email or password') {
             setError('Incorrect email or password');
            } else if (token && email !== 'test1@gmail.com') {
            //   setAuthToken(token);
             setError('Valid User'); 
            } else if (token && email === 'test1@gmail.com') {
            //   setAuthToken(token);
             setError('Enjoy'); 
              
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
 
      





  return (
    <div>
      
      <form>
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
        <button > Login </button>
        </form>






    </div>
  )
        }

export default SignIn
