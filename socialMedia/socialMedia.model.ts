import * as mongoose from 'mongoose'

export interface SocialMedia extends mongoose.Document{
    name: string,
    url: string
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

export const SocialMedia = mongoose.model<SocialMedia>('SocialMedia',socialMediaSchema)