const mongoose=require('mongoose')

const DB=process.env.DATABASE
mongoose.set('strictQuery', true)
mongoose.connect(DB).then(()=>{
    console.log('connected succesfully')
}).catch((err)=>{
    console.log(err)
})