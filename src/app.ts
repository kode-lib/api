import express from "express";

import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";

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

        this.express.use(DefaultRouter.router);
        this.express.use("/utils", UtilsRouter.router);
    }

    run(port: number) : void {
        this.express.listen(port, () => {
            console.log(`Application started on port ${port}`);
        });
    }
}