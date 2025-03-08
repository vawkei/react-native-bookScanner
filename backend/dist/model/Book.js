"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "book title missing"]
    },
    imageLinks: {
        thumbnail: { type: String }, //objeckt of stringzzzz
        smallThumbnail: { type: String }, //objeckt of stringzzzz
    },
    author: {
        type: [String],
        trim: true,
        default: []
    },
    description: {
        type: String,
        trim: true,
    },
    genre: {
        type: String,
        trim: true,
    },
    publishedDate: {
        type: String,
        trim: true
    },
    createdBy: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "User",
        required: [true, "please provide user"]
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model("Book", BookSchema);
