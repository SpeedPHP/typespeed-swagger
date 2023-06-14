
export default class Item {
    private typeOjbcet: object = {};
    constructor(typeKey: 
        "string" | "number" | "boolean" | "array" | "$ref"
        , typeValue?: string){
            if(typeKey === "array"){
                this.typeOjbcet = {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/" + typeValue
                    }
                };
            }else if(typeKey === "$ref"){
                this.typeOjbcet = {
                    "$ref": "#/components/schemas/" + typeValue
                };
            }else{
                this.typeOjbcet = {
                    "type": typeKey
                };
            }
        }
    
    toDoc() {
        return this.typeOjbcet;
    }


}