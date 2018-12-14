import * as mongoose from 'mongoose'

export interface Author extends mongoose.Document{
    nickname: string,
    avatar: string,
    initDate: string,
    }

const authorSchema = new mongoose.Schema({
    nickname:{
        type: String,
        unique: true
    },
    avatar:{
        type: String
    },
    initDate:{
        type: String
    }
})

export const Author = mongoose.model<Author>('Author',authorSchema)