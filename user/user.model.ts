import * as mongoose from 'mongoose'

export interface Access extends mongoose.Document{
    name: string
}

export interface User extends mongoose.Document{
    name: string,
    address: string,
    telephone: string,
    email: string,
    access:Access[]
}
    
const accessSchema = new mongoose.Schema({
    name:{
        type: String,
        enum:['Github','LinkedIn','StackOverflow','Twitter','Facebook'],
        unique: true
    },
    url:{
        type: String
    }
})
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    access:{
        type: [accessSchema],
        required:false
    }
})

export const User = mongoose.model<User>('User',userSchema)