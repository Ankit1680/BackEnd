import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema({


    username : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,    

    },

    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
           

    },
    fullName : {
        type: String,
        required: true,
        trim: true,
        index: true
           

    },

    avatar : {
        type: String,        //cloudinary url
        required: true,         

    },

    coverImage : {
        type: String,
    
    },

    watchHistory : [
        {
            type: Schema.Types.ObjectId,        
            ref : "Video"           //refernce of Video model
        }
    ],

    password: {
        type: String,
        required: [true, 'password is required']
    },

    refreshToken: {
        type: String
    }

}, {timestamps:true})



//pre("save", function())           
userSchema.pre("save",  async function (next) {

        if(!this.isModified("password")) return next();     //hash password only when password field is updated

        this.password = bcrypt.hash(this.password, 10)
        next()
})

//compare password
userSchema.methods.isPasswordCorrect = async function (password) {

  return await bcrypt.compare(password, this.password)
}

//Access Token      jwt.sign( data, secret , expiry)
userSchema.methods.generateAccessToken = async function(){

    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },

        process.env.ACCESS_TOKEN_SECRET,

        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// Refresh Token
userSchema.methods.generateRefreshToken = async function(){

    jwt.sign(
        {
            _id: this._id,
           
        },

        `${process.env.REFRESH_TOKEN_SECRET}`,

        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
    
}


export const User = mongoose.model("User", userSchema)