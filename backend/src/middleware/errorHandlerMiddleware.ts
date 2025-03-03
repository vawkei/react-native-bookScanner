import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("error message from errorHandlerMiddleware:", err);
  res
    .status(500)
    .json({
      msg: err instanceof Error ? err.message : "An unknown error occurred",
    });
  return;
};
