import Responses from "./responses.class";
type methodType = "post" | "get" | "put" | "delete" | "options" | "head" | "patch";

export default class Path {
    public tagName: string;
    public summary: string;
    public method: "post" | "get" | "put" | "delete" | "options" | "head" | "patch";
    public responses: Responses;

    constructor(method: methodType, summary: string, responses: Responses, tagName?: string){
        this.method = method;
        this.summary = summary;
        this.responses = responses;
        this.tagName = tagName;
    }

    toDoc() {
        return {
            "tags": [this.tagName || "default"],
            "summary": this.summary,
            "operationId": this.summary + this.method.charAt(0).toUpperCase() + this.method.slice(1),

            "responses": this.responses.toDoc()
        }
    }
}