import { Application } from './app';
import { Config } from './config';

async function main() {
    new Application({}).run(Config.port);
}

main().catch((err) => {
    console.error(err.stack);
    process.exit(1);
});
