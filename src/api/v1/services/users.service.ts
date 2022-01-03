import BaseService from "./base.service";
import { Model } from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/User";
import HttpException from "../exceptions/HttpException";
import { ErrorTypes } from "../exceptions/ErrorTypes";

class UsersService extends BaseService {
  constructor(model: Model<any, {}, {}, {}>) {
    super(model);
  }

  async register(name: string, email: string, password: string) {
    try {
      const saltRounds = 10;
      const hash = await bcrypt.hash(password, saltRounds);

      const newUser = new this.model({
        name: name,
        email: email,
        password: hash,
      });

      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const found = await this.model.findOne({ email: email });

      if (found) {
        if (await this.comparePasswordToDB(password, found.password)) {
          return found;
        }
      }
      throw new HttpException(400, "User not found", ErrorTypes.UserNotFound);
    } catch (error) {
      throw error;
    }
  }

  async comparePasswordToDB(password: string, hashedPassword: string) {
    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);

      if (isMatch) {
        return isMatch;
      }
      throw new HttpException(400, "Wrong password", ErrorTypes.WrongPassword);
    } catch (error) {
      throw new HttpException(400, "Wrong password", ErrorTypes.WrongPassword);
    }
  }
}

const usersService = new UsersService(User);

export default usersService;
