import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import colors from 'colors'


const connectDB = async ()=>{

    try {

       const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`MongoDB connected Host : ${conn.connection.host}`.bgGreen)

        
    } catch (error) {
        console.log("MONGODB connection error".bgRed, error);
        process.exit(1)
        
    }
}

export default connectDB