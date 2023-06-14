import { component, log } from "typespeed";
import { getMapping } from "../index";
import Document from "../templates/document.class";
import Schema from "../templates/schema.class";
import Path from "../templates/path.class";
import Item from "../templates/item.class";

@component
export default class Doc {

    @getMapping("/test")
    public test(req, res){
        const doc = new Document();
        const schemaUser = new Schema("User", new Map([
            ["name", new Item("string")], ["age", new Item("number")], ["game", new Item("$ref", "Game")]
        ]));
        const schemaGame = new Schema("Game");
        schemaGame.addProperty("name", new Item("string"));

        doc.addSchema(schemaUser);
        doc.addSchema(schemaGame);
        const userPath = new Path("post", "getProfile", "UserController");
        userPath.addResponse("200", "OK", "$ref", "User");
        userPath.addRequestBody("application/json", "$ref", "User");
        userPath.addParameter("name", "string");
        userPath.addParameter("game", "$ref", "Game");
        doc.addPath("/user", userPath);

        res.json(doc.toDoc());
    }

}