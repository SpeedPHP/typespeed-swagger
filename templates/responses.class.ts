import Item from "./item.class";

export default class Responses {
    public statusCode: string = "200";
    public description: string = "OK";
    private responseSchema: object = {};

    constructor(typeKey: 
        "string" | "number" | "boolean" | "array" | "$ref"
        , typeValue?: string){
        this.responseSchema = new Item(typeKey, typeValue).toDoc();
    }

    toDoc() {
        return {
            [this.statusCode]: {
                "description": this.description,
                "content": {
                    "*/*": {
                        "schema": this.responseSchema
                    }
                }
            }
        }
    }
}