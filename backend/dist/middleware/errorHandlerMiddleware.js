"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const errorHandlerMiddleware = (err, req, res, _next) => {
    console.log("error message from errorHandlerMiddleware:", err);
    res
        .status(500)
        .json({
        msg: err instanceof Error ? err.message : "An unknown error occurred",
    });
    return;
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
