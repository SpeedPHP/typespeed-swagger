import Responses from "./responses.class";
import Schema from "./schema.class";
import Path from "./path.class";



export default class Document {
    title: string;
    description: string;
    license: string;
    version: string;
    openapi: string;

    private tags: Set<string> = new Set();
    private schemas: object = {};
    private paths: object = {};

    addSchema(schema: Schema){
      this.schemas[schema.title] = schema.toDoc();
    }
    addPath(path: string, pathObject: Path){
      this.tags.add(pathObject.tagName);
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