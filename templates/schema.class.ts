import Item from "./item.class";

export default class Schema {
    public title: string;
    public properties: object = {};

    constructor(title: string){
        this.title = title;
    }

    addProperty(name: string, item: Item){
        this.properties[name] = item.toDoc();
    }

    toDoc() {
        return {
            "title": this.title,
            "type": "object",
            "properties": this.properties
        }
    }
}