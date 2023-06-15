import { 
    reqBody as tsReqBody, reqQuery as tsReqQuery, reqForm as tsReqForm, reqParam as tsReqParam, 
    getMapping as tsGetMapping, postMapping as tsPostMapping, requestMapping as tsRequestMapping
} from 'typespeed';
import 'reflect-metadata';
import { reflect, ReflectedClass, ReflectedTypeRef, ReflectedClassRef } from 'typescript-rtti';
import * as swaggerUi from "swagger-ui-express";
type methodType = "post" | "get" | "put" | "delete" | "options" | "head" | "patch" | "all";
type methodMappingType = "post" | "get" | "all";
type typeKind = "string" | "number" | "boolean" | "$ref" | "object";
type routerType = { method: methodMappingType, path: string, clazz: string, target: any, propertyKey: string };
type paramType = { clazz: string, target: any, propertyKey: string, parameterIndex: number };

const routerMap: Map<string, routerType> = new Map();
const paramMap: Map<string, paramType> = new Map();

function reqBody(target: any, propertyKey: string, parameterIndex: number) {
    const key = [target.constructor.name, propertyKey].toString();
    paramMap.set(key, {
        "clazz": target.constructor.name,
        "target": target,
        "propertyKey": propertyKey,
        "parameterIndex": parameterIndex
    });
    return tsReqBody(target, propertyKey, parameterIndex);
}

function reqParam(target: any, propertyKey: string, parameterIndex: number) {
    return tsReqParam(target, propertyKey, parameterIndex);
}

function reqQuery(target: any, propertyKey: string, parameterIndex: number) {
    return tsReqQuery(target, propertyKey, parameterIndex);
}

function reqForm(paramName: string) {
    const handler = tsReqForm(paramName);
    return (target: any, propertyKey: string, parameterIndex: number) => {
        return handler(target, propertyKey, parameterIndex);
    }
}

function swaggerMiddleware(app: any, options?: {}) {
    app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
            swaggerOptions: {
                url: "/example.json"
            }
        })
    );
}

function toMapping(method: methodMappingType, path: string, mappingMethod: Function, responseClass?: any) {
    const handler = mappingMethod(path);
    return (target: any, propertyKey: string) => {
        const key = [target.constructor.name, propertyKey].toString();
        if(!routerMap.has(key)){
            routerMap.set(key, {
                "method": method,
                "path": path,
                "clazz": target.constructor.name,
                "target": target,
                "propertyKey": propertyKey
            });
        }
        return handler(target, propertyKey);
    }
}

setTimeout(() => {
    if(routerMap.size === 0) return;
    routerMap.forEach((router, key) => {
        // const {method, path, clazz, target, propertyKey} = router;
        // const apiPath = new ApiPath(method, clazz, propertyKey);
        // const responseType = reflect(target[propertyKey]).returnType;
        // let realType = responseType["_ref"];
        // if(responseType.isPromise()){
        //     realType = responseType["_ref"]["p"][0];
        // }
        // if(typeof realType === "function"){
        //     if(/^class\s/.test(realType.toString())){
        //         apiPath.addResponse("200", "OK", Item.fromType("$ref", realType.name));
        //     }else{
        //         apiPath.addResponse("200", "OK", Item.fromType(realType.name.toLowerCase()));
        //     }
        // }else if(realType["TΦ"] === 'V'){
        //     apiPath.addResponse("200", "OK");
        // }else if(realType["TΦ"] === 'O'){
        //     apiPath.addResponse("200", "OK", Item.fromType("object"));
        // }else if(realType["TΦ"] === '~'){
        //     apiPath.addResponse("200", "OK", Item.fromType("string"));
        // }else if(realType["TΦ"] === '['){
        //     const deepRealType = realType["e"];
        //     if(/^class\s/.test(deepRealType.toString())){
        //         apiPath.addResponse("200", "OK", Item.fromArray("$ref", deepRealType.name));
        //     }else{
        //         apiPath.addResponse("200", "OK", Item.fromArray(deepRealType.name.toLowerCase()));
        //     }
        // }else{
        //     apiPath.addResponse("200", "OK", Item.fromType("string"));
        // }
        const apiPath = getApiPath(router);
        if(paramMap.has(key)){
            const { clazz, target, propertyKey, parameterIndex } = paramMap.get(key);
            const paramType = reflect(target[propertyKey]).parameters[parameterIndex];
            const realType = paramType.type["_ref"];
            console.log(realType)
            if(typeof realType === "function"){
                if(/^class\s/.test(realType.toString())){
                    apiPath.addRequestBody(Item.fromType("$ref", realType.name));
                }else{
                    apiPath.addRequestBody(Item.fromType(realType.name.toLowerCase()));
                }
            }else if(realType["TΦ"] === '['){
                const deepRealType = realType["e"];
                if(/^class\s/.test(deepRealType.toString())){
                    apiPath.addRequestBody(Item.fromArray("$ref", deepRealType.name));
                }else{
                    apiPath.addRequestBody(Item.fromArray(deepRealType.name.toLowerCase()));
                }
            }else if(realType["TΦ"] === 'O'){
                apiPath.addRequestBody(Item.fromType("object"));
            }else if(realType["TΦ"] === '~'){
                apiPath.addRequestBody(Item.fromType("string"));
            }
            console.log(JSON.stringify(apiPath.toDoc()));
        }
        
    });
}, 1000);

const getMapping = (value: string, responseClass?) => toMapping("get", value, tsGetMapping, responseClass);
const postMapping = (value: string, responseClass?) => toMapping("post", value, tsPostMapping, responseClass);
const requestMapping = (value: string, responseClass?) => toMapping("all", value, tsRequestMapping, responseClass);

function handleRealType(realType: any, callback: Function) {
    if(typeof realType === "function"){
        if(/^class\s/.test(realType.toString())){
            callback(Item.fromType("$ref", realType.name));
        }else{
            callback(Item.fromType(realType.name.toLowerCase()));
        }
    }else if(realType["TΦ"] === 'V'){
        callback();
    }else if(realType["TΦ"] === 'O'){
        callback(Item.fromType("object"));
    }else if(realType["TΦ"] === '~'){
        callback(Item.fromType("string"));
    }else if(realType["TΦ"] === '['){
        const deepRealType = realType["e"];
        if(/^class\s/.test(deepRealType.toString())){
            callback(Item.fromArray("$ref", deepRealType.name));
        }else{
            callback(Item.fromArray(deepRealType.name.toLowerCase()));
        }
    }else{
        callback(Item.fromType("string"));
    }
}

function getApiPath(router: routerType) : ApiPath {
    const {method, path, clazz, target, propertyKey} = router;
    const apiPath = new ApiPath(method, clazz, propertyKey);
    const responseType = reflect(target[propertyKey]).returnType;
    let realType = responseType["_ref"];
    if(responseType.isPromise()){
        realType = responseType["_ref"]["p"][0];
    }
    handleRealType(realType, function(item?: Item){
        if(item === undefined) {
            apiPath.addResponse("200", "OK");
        }else{
            apiPath.addResponse("200", "OK", item);
        }
    })
    return apiPath;
}

function getInfoByObjcet(target): string {
	const ref = reflect(target)
	const obj = new target;
	Object.getOwnPropertyNames(obj).forEach(k => {
		const params = ref.getParameter(k)
        if(params && params.type && params.type.ref){
            console.log(k, params.type.ref)
            const relatObj = params.type
            if(/^class\s/.test(relatObj.ref)){
                getInfoByObjcet(relatObj.class)
            }
        }
	})

    return target.name;
}

class ApiSchema {
    public title: string;
    public properties: object = {};

    constructor(title: string){
        this.title = title;
    }

    addProperty(name: string, item: object){
        this.properties[name] = item
    }

    toDoc() {
        return {
            "title": this.title,
            "type": "object",
            "properties": this.properties
        }
    }
}



class ApiPath {
    public tagName: string;
    public summary: string;
    public method: methodType;
    public responses: object = {};
    public parameters: object[] = [];
    public requestBody: object;

    constructor(method: methodType, tagName: string, summary: string){
        this.method = method;
        this.summary = summary;
        this.tagName = tagName;
    }

    addResponse(statusCode: string, description: string, itemObject?: Item){
        if(!itemObject) {
            this.responses[statusCode] = {
                "description": description
            }
            return;
        }
        this.responses[statusCode] = {
            "description": description,
            "content": {
                "*/*": {
                    "schema": itemObject.toDoc()
                }
            }
        }
    }

    addParameter(name: string, itemObject: Item){
        this.parameters.push({
            "name": name,
            "in": "query",
            "style": "form",
            "required": true,
            "schema": itemObject.toDoc()
        });
    }

    addRequestBody(itemObject: Item){
        this.requestBody = {
            "content": {
                "*/*": {
                    "schema": itemObject.toDoc()
                }
            }
        }
    }

    toDoc() {
        const doc = {
            "tags": this.tagName,
            "summary": this.summary,
            "operationId": this.summary + this.method.charAt(0).toUpperCase() + this.method.slice(1),
            "responses": this.responses,
        }
        if(this.requestBody) doc["requestBody"] = this.requestBody;
        if(this.parameters.length > 0) doc["parameters"] = this.parameters;

        return doc;
    }
}

class ApiDocument {
    title: string;
    description: string;
    license: string;
    version: string;
    openapi: string;

    private tags: Set<object> = new Set();
    private schemas: object = {};
    private paths: object = {};

    addSchema(schema: ApiSchema){
      this.schemas[schema.title] = schema.toDoc();
    }
    
    addPath(path: string, pathObject: ApiPath){
      this.tags.add({"name":pathObject.tagName});
      if(!this.paths[path]) this.paths[path] = {};
      this.paths[path][pathObject.method] = pathObject.toDoc();
    }

    toDoc() {
      return {
          "openapi": this.openapi || "3.0.0",
          "info": {
            "title": this.title || "API under construction",
            "description": this.description || "",
            "license": {
              "name": this.license || "UNLICENSED",
            },
            "version": this.version || "1.0.0",
          },
          "tags": Array.from(this.tags),
          "paths": this.paths,
          "components": {
              "schemas": this.schemas
          }
      }
    }
}

class Item {
    public typeKey: typeKind;
    public isArray?: boolean = false;
    public typeRef?: string;

    static fromArray(typeKey: typeKind, typeRef?: string){
        const item = new Item();
        item.typeKey = typeKey;
        item.isArray = true;
        item.typeRef = typeRef;
        return item;
    }

    static fromType(typeKey: typeKind, typeRef?: string){
        const item = new Item();
        item.typeKey = typeKey;
        item.typeRef = typeRef;
        return item;
    }

    public toDoc() {
        let items = {};
        if(this.typeKey === "$ref"){
            items = {
                "$ref": "#/components/schemas/" + this.typeRef
            };
        }else{
            items = {
                "type": this.typeKey
            };
        }
        if(this.isArray){
            items = {
                "type": "array",
                "items": items
            }
        }
        return items;
    }
}

export { reqBody, reqQuery, reqForm, reqParam, getMapping, postMapping, requestMapping, swaggerMiddleware };