import { app, log, autoware, ServerFactory } from "typespeed";
import { swaggerMiddleware } from "../index";

@app
class Main {

    @autoware
    public server : ServerFactory;

    public main(){
        swaggerMiddleware(this.server.app, null, "./test/package.json");
        this.server.start(8082);
    }
}
