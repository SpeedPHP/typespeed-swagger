import { component, log } from "typespeed";
// import { getMapping } from "../index";
// import Document from "../templates/document.class";
// import Schema from "../templates/schema.class";
// import Path from "../templates/path.class";
// import Item from "../templates/item.class";

@component
export default class Doc {

    // @getMapping("/test")
    // public test(req, res){
    //     const doc = new Document();
    //     const schemaUser = new Schema("User");
    //     schemaUser.addProperty("name", new Item("string"));
    //     schemaUser.addProperty("age", new Item("number"));
    //     schemaUser.addProperty("game", new Item("$ref", "Game"));
    //     const schemaGame = new Schema("Game");
    //     schemaGame.addProperty("name", new Item("string"));

    //     doc.addSchema(schemaUser);
    //     doc.addSchema(schemaGame);
    //     const userPath = new Path("post", "UserController", "getProfile");
    //     userPath.addResponse("200", "OK", "$ref", "User");
    //     userPath.addRequestBody("$ref", "User");
    //     userPath.addParameter("name", "string");
    //     userPath.addParameter("game", "$ref", "Game");
    //     doc.addPath("/user", userPath);

    //     res.json(doc.toDoc());
    // }

}