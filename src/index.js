// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from "./db/db.js";

//dotenv
dotenv.config({
    path: './env'
})

//connecting databse
connectDB();



















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