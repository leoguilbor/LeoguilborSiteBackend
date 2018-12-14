"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    position: {
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
exports.Job = mongoose.model('Job', jobSchema);
