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
    job: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Job',
        required: false
    },
    education: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Education',
        required: false
    },
    socialMedia: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'SocialMedia',
        required: false
    }
});
exports.Resume = mongoose.model('Resume', resumeSchema);
