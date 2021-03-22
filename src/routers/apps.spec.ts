import supertest from "supertest";
import { Application } from "../app";

const app = (new Application({ disableLogging: true })).express;

describe("Testing apps routes", () => {
    it("should retrieve latest version for app", async () => {
        await supertest(app)
            .get("/apps/werk/latest")
            .expect(200);
    });
});