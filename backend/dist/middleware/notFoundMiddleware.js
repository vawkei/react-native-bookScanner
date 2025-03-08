"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = void 0;
const notFoundMiddleware = (req, res) => {
    res.status(404).send("route doesn't exist");
    return;
};
exports.notFoundMiddleware = notFoundMiddleware;
