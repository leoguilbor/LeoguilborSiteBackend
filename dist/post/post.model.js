"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    text: {
        type: String,
        minlength: 50,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});
exports.Post = mongoose.model('Post', postSchema);
