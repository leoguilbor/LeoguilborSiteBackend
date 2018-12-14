import * as mongoose from 'mongoose'

export interface Job extends mongoose.Document{
    company: string,
    position: string,
    initDate: Date,
    endDate: Date,
    description:string
}

const jobSchema = new mongoose.Schema({
    company: {
        type:String, 
        required:true
    },
    position: {
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

export const Job = mongoose.model<Job>('Job',jobSchema)