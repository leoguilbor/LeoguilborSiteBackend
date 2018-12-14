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
exports.SocialMedia = mongoose.model('SocialMedia', socialMediaSchema);
