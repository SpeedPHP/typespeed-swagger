import { getMapping, postMapping, reqQuery, reqBody, reqForm, reqParam } from "../index";
import { component, log, req, res } from "typespeed";
import MutilUsers from "./entities/mutil-users.class";
import UserDto from "./entities/user-dto.class";


@component
export default class TestRequest {

    @getMapping("/test/res")
    testRes(@req req, @res res) {
        res.send("test res");
    }

    @getMapping("/test/query")
    async testQuery(req, res, @reqQuery id: number): Promise<MutilUsers> {
        log("id: " + id);
        return Promise.resolve(new MutilUsers("group", [new UserDto(1, "name"), new UserDto(2, "name")]));
    }

    @postMapping("/test/body")
    testBody(@res res, @reqBody body: UserDto):MutilUsers {
        log("body: " + JSON.stringify(body));
        return new MutilUsers("group", [body]);
    }

    @postMapping("/test/form")
    testForm(@res res, @reqForm("name") name: string) {
        log("form: " + JSON.stringify(name));
        res.send("Got name: " + name);
    }

    @getMapping("/test/param/:id")
    testParam(@res res, @reqParam id: number) {
        log("id: " + id);
        res.send("test param");
    }
}