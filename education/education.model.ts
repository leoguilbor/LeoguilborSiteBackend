import * as mongoose from 'mongoose'

export interface Education extends mongoose.Document{
    institution: string,
    course: string,
    initDate: Date,
    endDate: Date,
    description:string
}
    
const educationSchema = new mongoose.Schema({
    institution: {
        type:String, 
        required:true
    },
    course: {
        type:String, 
        required:true
    },
    initDate: {
        type:Date,
        required:true
    },
    endDate: {
        type:Date
    },
    description:{
        type:String
    }
})


export const Education = mongoose.model<Education>('Education',educationSchema)