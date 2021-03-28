import express from "express";
import { Server } from "http";

import { table } from "table";
import listEndpoints from "express-list-endpoints";


import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import expressPrometheusMiddleware from "express-prometheus-middleware"

import { DefaultRouter } from "./routers"
import { errorHandler } from "./middleware/error_handler"
import { stringify } from "node:querystring";

interface IApplicationOptions {
    disableLogging?: boolean
}

export class Application {
    public readonly express: express.Express;
    public readonly options: IApplicationOptions

    constructor(options: IApplicationOptions) {
        this.options = options;
        this.express = express();

        this.init();
    }

    private init() {
        // Middleware
        if (!this.options.disableLogging)
            this.express.use(morgan("short"));

        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(compression());
        this.express.use(express.json());
        this.express.use(expressPrometheusMiddleware({}));

        // Routes
        this.express.use(DefaultRouter);

        // General error handler. Must be always added at the end.
        this.express.use(errorHandler);
    }

    run(port: number): Server {
        return this.express.listen(port, () => {
            console.log(`Application started on port ${port}`);

            // Listing all endpoints in the CLI 
            const endpoints = listEndpoints(this.express)
                .flatMap(r => r.methods.map(m => [r.path, m]));
            console.log(table(endpoints));
        });
    }
}