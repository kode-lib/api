import jwt from "express-jwt";
import JwksRsa from "jwks-rsa";

import { Config } from "../config";

export const authorize = jwt({
    secret: JwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${Config.authDomain}/.well-known/jwks.json`
    }),
    audience: Config.authAudience,
    issuer: `${Config.authDomain}/`,
    algorithms: ["RS256"],
});