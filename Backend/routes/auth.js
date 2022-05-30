const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET = "poo221jaaryshdee5673raj235648@gamilkumar"

router.post('/createUser', [
    body('name', 'Length should be greater than 3').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'Account already exits with this email' })
        }

        const salt = await bcrypt.genSalt(10);
        const hashed_Password = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashed_Password
        })
        const data = {
            user:{
                id: user._id
            }
        }
        const auth_token = jwt.sign(data, JWT_SECRET);
        res.json({ auth_token });

    } catch (error) {
        console.log(error);
        res.status(500).json("Some Error Occured")
    }

})

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {

        const {email,password} = req.body

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Enter the correct Credentials"})
        }
        const cmp_password = bcrypt.compare(password,user.password);
        if(!cmp_password){
            return res.status(400).json({error:"Enter the correct Credentials"})
        }
        const data = {
            user:{
                id:user._id
            }
        }
        const auth_token = jwt.sign(data,JWT_SECRET);
        res.json({auth_token});
  
    } catch (error) {
        console.log(error);
        res.status.json('Some error occucred');
    }

})

module.exports = router