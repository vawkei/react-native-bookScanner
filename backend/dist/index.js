"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const auth_router_1 = __importDefault(require("./routes/auth-router"));
const googleBookRouter_1 = __importDefault(require("./routes/googleBookRouter"));
const notFoundMiddleware_1 = require("./middleware/notFoundMiddleware");
const errorHandlerMiddleware_1 = require("./middleware/errorHandlerMiddleware");
const app = (0, express_1.default)();
const authRoute = auth_router_1.default;
const googleAPIRoute = googleBookRouter_1.default;
// parse the jason body:
app.use(express_1.default.json());
const corsOptions = {
    origin: [
        "http://localhost:8081",
        "http://192.168.43.52:8081",
    ],
    // Allow requests from local network👆👆
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "my-custom-header"],
};
app.use((0, cors_1.default)(corsOptions));
//routes:
app.get("/", (_req, res) => {
    res.send("<h1>This is the index.ts checking in </h1>");
});
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/google-book-api", googleAPIRoute);
// Error handling middleware
app.use(notFoundMiddleware_1.notFoundMiddleware);
app.use(errorHandlerMiddleware_1.errorHandlerMiddleware);
// 👇👇====================starting the server locally======================👇👇
// const port = Number(process.env.PORT) || 5000;
//// const port = Number(process.env.PORT) || 8080;
// const HOST = "0.0.0.0";
// const start = async () => {
//   app.listen(port, HOST, () => {
//     console.log(`server is listening on ${ip.address()}:${port}`);
//   });
// };
// start();
// 👆👆====================starting the server locally======================👆👆
// 👇👇====================starting the server with mongodb=================👇👇
// const port = Number(process.env.PORT) || 8080;  // Cast to number
const port = Number(process.env.PORT) || 5000; // Cast to number
let url;
url = process.env.MONGODB_URI;
const start = async () => {
    try {
        await mongoose_1.default.connect(url);
        app.listen(port, "0.0.0.0", () => {
            console.log("connected to db...");
            console.log(`server listening on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
// 👆👆====================starting the server with mongodb=================👆👆
