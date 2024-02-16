const express = require('express');
const authrouter = express.Router();
const {signupUser,loginUser} = require ('../controllers/auth.js')

authrouter.post('/SignUp',signupUser );
authrouter.post('/SignIn',loginUser);

module.exports = authrouter