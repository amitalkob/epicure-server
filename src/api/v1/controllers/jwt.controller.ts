import { sign, verify } from "jsonwebtoken";
import config from "config";
import HttpException from "../exceptions/HttpException";
import { ErrorTypes } from "../exceptions/ErrorTypes";

export default class JWTController {
  public static readonly forToken: { key: string; value: string } = config.get(
    "Security.Request.ForToken"
  );
  private static readonly expirationDuration: string = "3h";

  public static createToken(userID: string): string {
    var token = sign({ id: userID }, this.forToken.value, {
      expiresIn: this.expirationDuration,
    });

    return token;
  }

  public static async verifyToken(token: string): Promise<string | object> {
    try {
      const decodedToken = verify(token, this.forToken.value);
      return decodedToken;
    } catch (err) {
      throw new HttpException(401, "Invalid token", ErrorTypes.InvalidToken);
    }
  }

  public static cleanReceivedToken(authHeader: string): string {
    let token = "";
    if (authHeader && authHeader.includes("Bearer ")) {
      token = authHeader.substring(7, authHeader.length);
    }
    return token;
  }
}
