const mongoose=require('mongoose')
const express=require('express')
const app=express()
const dotenv=require('dotenv')

dotenv.config({path:'./config.env'})
const PORT=process.env.PORT

require('./db/conn')
app.use(express.json())
app.use(require('./routes/auth'))



//const User=require('./models/userSchema');

// const middleware=(req,res,next)=>{
//     console.log(`i am middleware`);
//     next();
// }
// app.get('/',(req,res)=>{
//     res.send(`hello from server`);
// });

// app.get('/about',middleware,(req,res)=>{
//     res.send(`hello from  about server`);
// });

// app.get('/contact',(req,res)=>{
//     res.send(`hello from contact server`);
// });
app.get('/signup',(req,res)=>{
    res.cookie("mern","kalu")
    res.send(`hello from signup server`);
});
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})