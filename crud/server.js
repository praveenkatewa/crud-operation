const express=require("express")
const mongoose=require("mongoose")
const app= express()
const port=3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mongoURL="mongodb+srv://praveen:1234@atlascluster.j8sgveq.mongodb.net/crud"

mongoose.connect(mongoURL).then(()=>{
    console.log('<<<<<<<connected to mongodb')
})


.catch((err)=>{
    console.log('error connecting to mongodb',err)
})

const userRoutes= require('./ro+uters/user')

app.use('/users',userRoutes)
 
app.listen(port,()=>{
    console.log(`server on running on port ${port}`)
})