import * as os from "os";
const chaiObj = require('chai');
chaiObj.use(require("chai-http"));
const expect = chaiObj.expect;

describe("Test Swagger plugin for TypeSpeed", () => {
    let appClose;
    const hostname = os.hostname();
    before(function () {
        this.timeout(20000);
        appClose = require("../app/main");
    });
    it("Swagger UI", (done) =>  {
        chaiObj.request(`http://${hostname}:8082`).get("/docs").end((err, res) => {
            expect(res.status).to.be.equal(200);
            done();
        });
    });
    // it("JSDoc for Project", (done) => {
    //     const jsonFile = require("../app/example.json");
    //     chaiObj.request("http://127.0.0.1:8082").get("/docs/swagger.json").end((err, res) => {
    //         expect(JSON.stringify(res.body)).to.be.equal(JSON.stringify(jsonFile));
    //         done();
    //     });
    // });
    after((done) => {
        if(appClose != null){
            appClose.default();
        }
        done();
    });
});


export {};