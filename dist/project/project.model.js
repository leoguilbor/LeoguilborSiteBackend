"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    technologies: {
        type: String,
        required: true
    },
    initDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
});
exports.Project = mongoose.model('Project', projectSchema);
