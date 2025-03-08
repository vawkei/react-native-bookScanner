"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticationMiddleware = (req, res, next) => {
    console.log("authentication starts", req.headers.authorization);
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ msg: "Bearer token not provided" });
        console.log("Bearer token not provided");
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SecretKey);
        console.log("decoded:", decoded);
        req.user = { userId: decoded._id, username: decoded.username };
        console.log("req.user:", req.user);
        next();
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "something went wrong";
        console.log("error message:", message);
        res.status(500).json({ msg: message });
    }
};
exports.default = authenticationMiddleware;
