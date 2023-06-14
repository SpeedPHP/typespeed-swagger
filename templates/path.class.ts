import Item from "./item.class";
type methodType = "post" | "get" | "put" | "delete" | "options" | "head" | "patch";
type typeKind = "string" | "number" | "boolean" | "array" | "$ref";

export default class Path {
    public tagName: string;
    public summary: string;
    public method: methodType;
    public responses: object = {};
    public parameters: object[] = [];
    public requestBody: object;

    constructor(method: methodType, summary: string, tagName?: string){
        this.method = method;
        this.summary = summary;
        this.tagName = tagName;
    }

    addResponse(statusCode: string, description: string, typeKey: typeKind, typeValue?: string){
        this.responses[statusCode] = {
            "description": description,
            "content": {
                "*/*": {
                    "schema": new Item(typeKey, typeValue).toDoc()
                }
            }
        }
    }

    addParameter(name: string, typeKey: typeKind, typeValue?: string){
        this.parameters.push({
            "name": name,
            "in": "query",
            "style": "form",
            "required": true,
            "schema": new Item(typeKey, typeValue).toDoc()
        });
    }

    addRequestBody(contentType: string, typeKey: typeKind, typeValue?: string){
        this.requestBody = {
            "content": {
                [contentType]: {
                    "schema": new Item(typeKey, typeValue).toDoc()
                }
            }
        }
    }

    toDoc() {
        const doc = {
            "tags": [this.tagName || "default"],
            "summary": this.summary,
            "operationId": this.summary + this.method.charAt(0).toUpperCase() + this.method.slice(1),
            "responses": this.responses,
        }
        if(this.requestBody) doc["requestBody"] = this.requestBody;
        if(this.parameters.length > 0) doc["parameters"] = this.parameters;

        return doc;
    }
}