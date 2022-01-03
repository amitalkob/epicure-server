import { ErrorTypes } from "./ErrorTypes";

export default class HttpException extends Error {
  status: number;
  message: string;
  type: ErrorTypes;

  constructor(status: number, message: string, type: ErrorTypes) {
    super(message);
    this.status = status;
    this.message = message;
    this.type = type;
  }
}
