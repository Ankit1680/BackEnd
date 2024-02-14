// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from "./db/db.js";
import app from './app.js';

//dotenv
dotenv.config({
    path: './env'
})

//connecting databse
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{

        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
console.log("MongoDB connection failed!!", err)
})



















// import express from 'express'
// const app = express();

// ;( async ()=> {

//     try {
        
//         const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

//         app.on("error", (error)=>{
//             console.log(error)
//         })

//         app.listen(process.env.PORT, ()=>{

//             console.log(`server running on ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.log(error)
//     }

// })()