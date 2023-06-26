import { app, log, autoware, ServerFactory } from "typespeed";
import { swaggerMiddleware } from "../index";
let appServer = null;

@app
class Main {

    @autoware
    public server : ServerFactory;

    public main(){
        swaggerMiddleware(this.server.app, null, "./package.json");
        appServer = this.server.start(8082);
    }
}

export default () => {
    if (appServer != null) {
        appServer.close();
    }
};