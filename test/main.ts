import { app, log, autoware, ServerFactory } from "typespeed";

@app
class Main {

    @autoware
    public server : ServerFactory;

    public main(){
        this.server.start(8082);
    }
}