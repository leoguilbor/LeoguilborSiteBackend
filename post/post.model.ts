import * as mongoose from 'mongoose'
import { Author } from '../author/author.model';

export interface Post extends mongoose.Document{
    title: string,
    text: string,
    date: string,
    author: mongoose.Types.ObjectId | Author
    }

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true
    },
    text:{
        type: String,
        minlength:50,
        required: true
    },
    date:{
        type: String,
        required: true

    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

export const Post = mongoose.model<Post>('Post',postSchema)