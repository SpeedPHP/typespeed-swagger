const chaiObj = require('chai');
chaiObj.use(require("chai-http"));
const expect = chaiObj.expect;

describe("Test Swagger plugin for TypeSpeed", () => {
    let appClose;
    before(() => {
        appClose = require("../app/main");
    });
    it("Swagger UI", (done) => {
        chaiObj.request("http://localhost:8082").get("/docs").end((err, res) => {
            expect(res.status).to.be.equal(200);
            done();
        });
    });
    it("JSDoc for Project", (done) => {
        const jsonFile = require("../app/example.json");
        chaiObj.request("http://localhost:8082").get("/docs/swagger.json").end((err, res) => {
            expect(JSON.stringify(res.body)).to.be.equal(JSON.stringify(jsonFile));
            done();
        });
    });
    after(() => {
        if(appClose != null){
            appClose.default();
        }
    });
});


export {};