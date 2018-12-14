"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    initDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    description: {
        type: String
    }
});
exports.Education = mongoose.model('Education', educationSchema);
