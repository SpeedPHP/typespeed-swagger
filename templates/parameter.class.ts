
export default class Parameter {
    public name: string;
    public description: string;
    public in: string = "query";
    public style: string = "form";
    public required: boolean = true;
    public schemaType: string;

    constructor(name: string, schemaType: string, description?: string){
        this.name = name;
        this.schemaType = schemaType;
        this.description = description;
    }

    toDoc() {
        return {
            "name": this.name,
            "in": this.in,
            "style": this.style,
            "description": this.description || "",
            "required": this.required,
            "schema": {
                "type": this.schemaType
            }
        }
    }
}