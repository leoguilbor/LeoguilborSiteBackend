"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
    nickname: {
        type: String,
        unique: true
    },
    avatar: {
        type: String
    },
    initDate: {
        type: String
    }
});
exports.Author = mongoose.model('Author', authorSchema);
