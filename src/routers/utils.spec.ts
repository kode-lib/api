import supertest from "supertest";
import { Application } from "../app";

const app = (new Application({ disableLogging: true })).express;

describe("Testing utils routes", () => {
    it("should retrieve latest version", async () => {
        await supertest(app)
            .get("/utils/app/werk/latest")
            .expect(200);
    });
});