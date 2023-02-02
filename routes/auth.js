const express=require('express')
const router=express.Router();
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const authenticate=require('../middleware/authenticate')
const cookieParser = require("cookie-parser");
router.use(cookieParser());

require('../db/conn')
const User=require('../models/userSchema')



router.get('/',(req,res)=>{
    res.send('hello from router baby')
});

router.post('/register',(req,res)=>{
    const {name, email,phone,work,password,cpassword}=req.body
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"plz fill the field properly"});
    }

    User.findOne({email:email}).then((userexist)=>{
        if(userexist){
            return res.status(422).json({error:"email already exist"});
        }else if(password!==cpassword){
            return res.status(422).json({error:"password and confirm password must be same"});
        }else{
            const user=new User({name, email,phone,work,password,cpassword});

        user.save().then(()=>{
            res.status(201).json({error:"user created succesfully"})
        }).catch((err)=> res.status(500).json({error:"failed to register"}))
        }
        
    }).catch(err=>{console.log(err)});
})

router.post('/login', async (req,res)=>{
    try{
        let token;
        const {email,password}=req.body
        if(!email || !password){
        return res.status(400).json({error:"plz fill the credentials"})
    }
    const userlogin=await User.findOne({email:email});

    if(userlogin){
        const ismatch=await bcrypt.compare(password,userlogin.password)
        token=await userlogin.generateAuthToken();
        console.log(token);
        res.cookie('jwtoken',token,{
            expires: new Date(Date.now()+25892000000),
            httpOnly:true
        });
        if(!ismatch){
            return res.status(400).json({error:"user dont exist"});
        }else{
            return res.json({error:"user success"});
        }
    }else{
        return res.status(400).json({error:"user dont exist"});
    }
    }catch(err){
        console.log(err);
    }
})

router.get('/about',authenticate,(req,res)=>{
    console.log(`hello from  about server`);
    res.send(req.rootUser);
});

router.get('/contact',authenticate,(req,res)=>{
    console.log(`hello from contact server`);
    res.send(req.rootUser);
});

router.post('/contactus',authenticate, async (req,res)=>{
    try{
        const {name,email,phone,message}=req.body;

        if(!name || !email || !phone || !message){
            console.log("error in contact form");
            return res.json({error:"plz fill the contact form"})
        }

        const userContact= await User.findOne({_id:req.userId});

        if(userContact){
            const userMessage=await userContact.addMessage(name,email,phone,message);
            await userContact.save();
            res.status(201).json({message:"user contact successful"});
        }

    }catch(err){
        console.log(err);
    }
});

router.get('/logout',authenticate,(req,res)=>{
    console.log(`hello from logout server`);
    res.clearCookie('jwtoken',{path:"/"});
    res.status(200).send({messagess:"User logout"});
});

module.exports=router;