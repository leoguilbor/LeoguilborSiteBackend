"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const socialMediaSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Github', 'LinkedIn', 'StackOverflow', 'Twitter', 'Facebook'],
        unique: true
    },
    url: {
        type: String
    }
});
const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    telephone: {
        type: [String],
        required: true
    },
    email: {
        type: String
    },
    socialMedia: {
        type: [socialMediaSchema],
        required: false
    }
});
exports.Resume = mongoose.model('Resume', resumeSchema);
