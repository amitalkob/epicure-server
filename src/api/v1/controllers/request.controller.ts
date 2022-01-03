import { Request, Response, Router, NextFunction } from "express";
import JWTController from "./jwt.controller";
import HttpException from "../exceptions/HttpException";
import { ErrorTypes } from "../exceptions/ErrorTypes";

export default class RequestController {
  public async headerValidation(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    if (req.method == "OPTIONS") {
      return next();
    }

    const authHeaderVal = req.headers.authorization;
    const token = authHeaderVal ? authHeaderVal : null;

    if (!token) {
      next(new HttpException(403, "Forbidden", ErrorTypes.Forbidden));
    } else {
      try {
        const decoded = await JWTController.verifyToken(token);
        res.locals.userId = (decoded as any).id;
        next();
      } catch (error) {
        next(new HttpException(400, "User not found", ErrorTypes.UserNotFound));
      }
    }
  }
}
