const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');



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
         hashed_Password = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            description:req.body.description,
            email: req.body.email,
            password: hashed_Password,
            img:req.body.img,
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
    body('password','').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const { email,password } = req.body
    try {

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Enter the correct Credentials"})
        }
        const cmp_password = await bcrypt.compare(password,user.password);
        // const passwordCompare = await bcrypt.compare(password, user.password);
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




// rout 3 :: update user profile login required here id = user_id
router.put('/updateprofile/:id',fetchuser,async(req,res)=>{
    const {name,description} = req.body;
   
    try{
        const newProfile = {};
        if(name){newProfile.name = name};
        if(description){newProfile.description = description}

       

        let userto_update = await User.findById(req.params.id);
        if(!userto_update){
            return res.status(404).send('Not found');
        }
        if(userto_update._id.toString()!== req.user.id){
            return res.status(401).send('Not Allowed');
        }
      
        userto_update = await User.findByIdAndUpdate(req.params.id,{$set:newProfile},{new:true});
        res.json(userto_update);
    }catch(error){
        console.log(error);
        res.status(500).send("Some error occured");
    }
})
router.put('/updatepassword/:id',fetchuser,async(req,res)=>{
    const {update_password} = req.body;
    try{
        const newPassword = {};
        let user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).send('Not found');
        }
        if(user._id.toString()!== req.user.id){
            return res.status(401).send('Not Allowed');
        }
        const salt = await bcrypt.genSalt(10);
        const hashed_Password = await bcrypt.hash(update_password,salt);
       
        newPassword.password = hashed_Password;
        
        user = await User.findByIdAndUpdate(req.params.id,{$set:newPassword},{new:true});
        res.json(user);
    }catch(error){
        console.log(error);
        res.status(500).send("Some error occured");
    }
})

router.get('/getUser',fetchuser, async(req,res)=>{
    try {
        const userId = req.user;
        const user = await User.find(userId).select("-password");
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router