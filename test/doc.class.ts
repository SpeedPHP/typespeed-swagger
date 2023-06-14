import { component, log } from "typespeed";
import { getMapping } from "../index";
import Document from "../templates/document.class";
import Schema from "../templates/schema.class";
import Path from "../templates/path.class";
import Responses from "../templates/responses.class";
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
        doc.addPath("/user", new Path("post", "getProfile", new Responses("array", "Game"), 
        "UserController"));
        doc.addPath("/user", new Path("get", "getProfile", new Responses("array", "Game"), 
        "UserController"));

        res.json(doc.toDoc());
    }

}