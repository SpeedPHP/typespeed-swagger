import { app, log, autoware, ServerFactory } from "typespeed";
import { swaggerMiddleware } from "../index";
import * as path from "path";

let appServer = null;
let esApp = null;
@app
class Main {

    @autoware
    public server: ServerFactory;

    public main() {
        const packageJson = path.join(__dirname, "./package.json");
        swaggerMiddleware(this.server.app, null, packageJson);
        appServer = this.server.start(8082);
        esApp = this.server.app;
    }
}

function getApp() {
    return new Promise((resolve, reject) => {
        const loop = () => {
            if (esApp !== null) {
                resolve(esApp)
            }else {
                setTimeout(loop)
            }
        }
        loop();
    });
}

export default getApp;