const chaiObj = require('chai');
chaiObj.use(require("chai-http"));
const expect = chaiObj.expect;

describe("Test Swagger plugin for TypeSpeed", () => {
    let appClose;
    let esApp;
    before(async () => {
        appClose = require("../app/main");
        esApp = await appClose.default();
    });
    it("Swagger UI", (done) =>  {
        console.log(esApp)
        chaiObj.request(esApp).get("/docs").end((err, res) => {
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
    // after((done) => {
    //     if(appClose != null){
    //         appClose.default();
    //     }
    //     done();
    // });
});


export {};