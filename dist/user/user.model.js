"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const accessSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Github', 'LinkedIn', 'StackOverflow', 'Twitter', 'Facebook'],
        unique: true
    },
    url: {
        type: String
    }
});
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    access: {
        type: [accessSchema],
        required: false
    }
});
exports.User = mongoose.model('User', userSchema);
