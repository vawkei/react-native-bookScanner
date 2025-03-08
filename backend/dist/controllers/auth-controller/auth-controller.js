"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = void 0;
const User_1 = __importDefault(require("../../model/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const registerController = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    if (!name || !email || !password) {
        console.log("please fill inputs");
        res.status(400).json({ msg: "please fill inputs" });
        return;
    }
    if (password.trim().length < 6) {
        console.log("password shouldn't be less than 6 characters");
        res
            .status(400)
            .json({ msg: "password shouldn't be less than 6 characters" });
        return;
    }
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const userData = {
        name: name,
        email: email,
        password: hashedPassword,
        isRegistered: true,
    };
    try {
        const emailExists = await User_1.default.findOne({ email });
        if (emailExists) {
            console.log("user already registered");
            res.status(401).json({ msg: "user already registered" });
            return;
        }
        await User_1.default.create(userData);
        console.log("registration successful...");
        res.status(200).json({ msg: "registration successful" });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "something went wrong";
        console.log("register error message:", message);
    }
    // res.send("This is the register route.")
};
exports.registerController = registerController;
const loginController = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        console.log("please fill inputs");
        res.status(400).json({ msg: "please fill inputs" });
        return;
    }
    try {
        const user = await User_1.default.findOne({ email });
        if (!user) {
            console.log("user hasn't been registered");
            res.status(404).json({ msg: "user hasn't been registered" });
            return;
        }
        if (!user.isRegistered) {
            console.log("user hasn't been registered");
            res.status(401).json({ msg: "user hasn't been registered" });
            return;
        }
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            console.log("invalid password");
            res.status(401).json({ msg: "invalid password" });
            return;
        }
        console.log("about to iossue jwt token");
        const generateToken = (_id, username = "") => {
            const tokenDuration = parseInt(process.env.ExpiresIn || "3600", 10);
            return `Bearer ${jsonwebtoken_1.default.sign({ _id, username }, process.env.SecretKey, {
                expiresIn: tokenDuration,
            })}`;
        };
        const token = generateToken(user._id.toString(), user.name || "");
        console.log("login token:", token);
        res
            .status(201)
            .json({ msg: "user logged in successfully", token: token, user: user });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "something went wrong";
        console.log("loging error message:", message);
    }
    // res.send("This is the login route.")
};
exports.loginController = loginController;
