import * as mongoose from 'mongoose'

export interface Project extends mongoose.Document{
    title: string,
    description: string,
    url:string,
    technologies: string,
    initDate: string,
    endDate: string

    }

const projectSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    technologies: {
        type:String,
        required:true
    },
    initDate: {
        type:Date
    },
    endDate: {
        type:Date
    }
})

export const Project = mongoose.model<Project>('Project',projectSchema)