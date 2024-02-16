const db = require('../database/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {user} = require ('../database/index.js')
require('dotenv').config();
const secretKey = process.env.JWT_SECRET || '123456';
console.log("JWT_SECRET from process.env:", process.env.JWT_SECRET);


const signupUser = async (req, res) => {
    try {
        
            let Name=req.body.name
            let Email=req.body.email
            let Password=req.body.password
            let Photo=req.body.photo
            let Location=req.body.location
            let Role=req.body.role
         

        const newUser = await user.create({
            UserName : Name,
            UserEmail : Email,
            UserPassword: await bcrypt.hash(Password, 15),
            UserPhoto: Photo,
            UserLocation : Location ,
            UserRole : Role,
        });
    
        return res.status(200).json(newUser);
    } catch (err) {
        console.error('Error in registering user:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const loginUser = async (req, res) => {
    try 
         { 
        let email = req.body.email
        let password = req.body.password
        const data = await user.findOne({
            where: { UserEmail : email }})
      

        if (!data) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, data.UserPassword);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Incorrect email or password' });
        }

        const token = await jwt.sign({ email: data.UserEmail }, secretKey) 
        res.send({token:token})
    
}
    catch (err) {
        console.error('Error in signing in user:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { signupUser, loginUser };
