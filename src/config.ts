import dotenv from "dotenv";

dotenv.config();

interface IConfig {
    port : number
}

export const Config: IConfig = {
    port: parseInt(process.env.PORT || "4000", 10),
}