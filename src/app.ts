import express from "express";
import { Server } from "http";

import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import expressPrometheusMiddleware from "express-prometheus-middleware"

import { errorHandler } from "./middleware/error_handler"
import * as DefaultRouter from "./routers/default"
import * as UtilsRouter from "./routers/utils";

export class Application {
    public readonly express: express.Express;

    constructor() {
        this.express = express();

        this.init();
    }

    private init() {
        this.express.use(helmet());
        this.express.use(morgan("short"));
        this.express.use(cors());
        this.express.use(compression());
        this.express.use(express.json());
        this.express.use(expressPrometheusMiddleware({}));

        this.express.use(DefaultRouter.router);
        this.express.use("/utils", UtilsRouter.router);

        // General error handler. Must be always added at the end.
        this.express.use(errorHandler);
    }

    run(port: number): Server {
        return this.express.listen(port, () => {
            console.log(`Application started on port ${port}`);
        });
    }
}