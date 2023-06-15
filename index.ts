import { 
    reqBody as tsReqBody, reqQuery as tsReqQuery, reqForm as tsReqForm, reqParam as tsReqParam, 
    getMapping as tsGetMapping, postMapping as tsPostMapping, requestMapping as tsRequestMapping
} from 'typespeed';
import 'reflect-metadata';
import { reflect, ReflectedClass, ReflectedTypeRef } from 'typescript-rtti';
import * as swaggerUi from "swagger-ui-express";
type methodType = "post" | "get" | "put" | "delete" | "options" | "head" | "patch" | "all";
type methodMappingType = "post" | "get" | "all";
type typeKind = "string" | "number" | "boolean" | "array" | "$ref";

const routerMap: Map<string, Map<string, object>> = new Map();
const paramMap: Map<string, Map<string, object>> = new Map();

function reqBody(target: any, propertyKey: string, parameterIndex: number) {
    return tsReqBody(target, propertyKey, parameterIndex);
}

function toRequestParams(paramName: string, requestMethod: Function) {
    const handler = requestMethod(paramName);
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
let store = [];
function toMapping(method: methodMappingType, path: string, mappingMethod: Function, responseClass?: any) {
    const handler = mappingMethod(path);
    return (target: any, propertyKey: string) => {
        const apiPath = new ApiPath(method, target.constructor.name, propertyKey);
        const returnType = Reflect.getMetadata('design:returntype', target, propertyKey);
        let returnTypeKey = "";
        if(returnType === Promise){
            store = [target, propertyKey, returnType]
        }
        if(responseClass !== undefined){
            returnTypeKey = getInfoByObjcet(responseClass);
        } else if (returnType !== undefined && returnType !== Promise) {
			returnTypeKey = getInfoByObjcet(returnType);
            if(returnTypeKey === "Array"){
                //store = [target, propertyKey, returnType]
            }
		}
        console.log(returnTypeKey)
        return handler(target, propertyKey);
    }
}

setTimeout(() => {
    let [target, propertyKey, returnType] = store
    const ref = reflect(target[propertyKey]).returnType
    const p = ref["_ref"]["p"]
    console.log(p[0])
    console.log(ref["_ref"]["p"][0]["e"])
    // const ref= ReflectedClass.for(target).getMethod(propertyKey).returnType
    // console.log(ref.as("array").elementType["_ref"])
    // getInfoByObjcet(ref.as("array").elementType["_ref"]);
}, 1000);

const reqQuery = (paramName: string) => toRequestParams(paramName, tsReqQuery);
const reqForm = (paramName: string) => toRequestParams(paramName, tsReqForm);
const reqParam = (paramName: string) => toRequestParams(paramName, tsReqParam);
const getMapping = (value: string, responseClass?) => toMapping("get", value, tsGetMapping, responseClass);
const postMapping = (value: string, responseClass?) => toMapping("post", value, tsPostMapping, responseClass);
const requestMapping = (value: string, responseClass?) => toMapping("all", value, tsRequestMapping, responseClass);

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

    addResponse(statusCode: string, description: string, typeKey: typeKind, typeValue?: string){
        this.responses[statusCode] = {
            "description": description,
            "content": {
                "*/*": {
                    "schema": getItem(typeKey, typeValue)
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
            "schema": getItem(typeKey, typeValue)
        });
    }

    addRequestBody(typeKey: typeKind, typeValue?: string){
        this.requestBody = {
            "content": {
                "*/*": {
                    "schema": getItem(typeKey, typeValue)
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

function getItem(typeKey: typeKind, typeValue?: string){
    if(typeKey === "array"){
        return {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/" + typeValue
            }
        };
    }else if(typeKey === "$ref"){
        return {
            "$ref": "#/components/schemas/" + typeValue
        };
    }else{
        return {
            "type": typeKey
        };
    }
}

export { reqBody, reqQuery, reqForm, reqParam, getMapping, postMapping, requestMapping, swaggerMiddleware };