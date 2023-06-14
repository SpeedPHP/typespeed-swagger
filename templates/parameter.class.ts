import Item from "./item.class";

type typeKind = "string" | "number" | "boolean" | "array" | "$ref";

export default class Parameter {
    public name: string;
    public description: string;
    public in: string = "query";
    public style: string = "form";
    public required: boolean = true;
    public schema: object;

    constructor(name: string, typeKey: typeKind, typeValue?: string, description?: string){
        this.name = name;
        this.schema = new Item(typeKey, typeValue).toDoc();
        this.description = description;
    }

    toDoc() {
        return {
            "name": this.name,
            "in": this.in,
            "style": this.style,
            "description": this.description || "",
            "required": this.required,
            "schema": this.schema
        }
    }
}