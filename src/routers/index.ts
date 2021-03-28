import { Router } from "express";

import * as RootRouter from "./root"
import * as AppsRouter from "./apps";
import * as PrivateRouter from "./private";

export const DefaultRouter = Router()

DefaultRouter.use("/", RootRouter.router);

const apiRouter = Router();
apiRouter.use(AppsRouter.router);
apiRouter.use(PrivateRouter.router);
DefaultRouter.use("/v1", apiRouter)
