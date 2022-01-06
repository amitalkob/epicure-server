import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ApiRoute from "./api/api.route";
import bodyParser from "body-parser";

mongoose.connect(
  "mongodb+srv://amit:Aa123456@epicure.xgnob.mongodb.net/epicureDB"
);

export default class App {
  app: express.Application;
  port: number;

  constructor(port: any) {
    this.app = express();
    this.port = port;
    this.initializeSettings();
    this.initializeRoutes();
  }

  initializeSettings() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  initializeRoutes() {
    this.app.use("/api", new ApiRoute().router);
  }
}
