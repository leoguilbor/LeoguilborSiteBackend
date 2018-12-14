import * as mongoose from 'mongoose'
import {Education} from '../education/education.model'
import {Job} from '../job/job.model'
import {SocialMedia} from '../socialMedia/socialMedia.model'


export interface SocialMedia extends mongoose.Document{
    name: string,
    url: string
}

export interface Resume extends mongoose.Document{
    name: string,
    address: string,
    telephone: string,
    email: string,
    job:mongoose.Types.ObjectId[] | Job[],
    education:mongoose.Types.ObjectId[] | Education[],
    socialMedia:mongoose.Types.ObjectId[] | SocialMedia[]
}

const socialMediaSchema = new mongoose.Schema({
    name:{
        type: String,
        enum:['Github','LinkedIn','StackOverflow','Twitter','Facebook'],
        unique: true
    },
    url:{
        type: String
    }
})
const resumeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    telephone:{
        type: [String],
        required: true
    },
    email:{
        type: String
    },
    job:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Job',
        required:false
    },
    education:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Education',
        required:false
    },
    socialMedia:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'SocialMedia',
        required:false
    }
})

export const Resume = mongoose.model<Resume>('Resume',resumeSchema)