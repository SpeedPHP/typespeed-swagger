import Item from "./item.class";

export default class Schema {
    public title: string;
    public type: string = "object";
    public properties: object = {};

    constructor(title: string, properties?: Map<string, Item>){
        this.title = title;
        properties?.forEach((item, name) => {
            this.properties[name] = item.toDoc();
        });
    }

    addProperty(name: string, item: Item){
        this.properties[name] = item.toDoc();
    }

    toDoc() {
        return {
            "title": this.title,
            "type": this.type,
            "properties": this.properties
        }
    }
}