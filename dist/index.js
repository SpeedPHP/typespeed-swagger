"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerMiddleware = exports.requestMapping = exports.postMapping = exports.getMapping = exports.reqParam = exports.reqForm = exports.reqQuery = exports.reqBody = void 0;
const __RΦ = { m: (k, v) => (t, ...a) => t && Reflect.metadata ? Reflect.metadata(k, v)(t, ...a) : void 0, f: (f, d, n) => (d.forEach(d => d(f)), Object.defineProperty(f, "name", { value: n, writable: false }), f), c: (c, d, dp, dsp, n) => (d.forEach(d => d(c)), dp.forEach(([p, d]) => d(c.prototype, p)), dsp.forEach(([p, d]) => d(c, p)), n ? Object.defineProperty(c, "name", { value: n, writable: false }) : undefined, c), r: (o, a) => (Object.assign(o, a)), a: id => {
        let t = __RΦ.t[id];
        if (t === void 0)
            return void 0;
        if (t.RΦ) {
            let r = t.RΦ;
            delete t.RΦ;
            __RΦ.r(t, r(t));
        }
        else if (t.LΦ) {
            let l = t.LΦ();
            delete t.LΦ;
            __RΦ.t[id] = t = l;
        }
        return t;
    }, t: { [1]: { RΦ: t => ({ TΦ: "~" }) }, [15]: { LΦ: t => String }, [16]: { LΦ: t => Number }, [24]: { RΦ: t => ({ TΦ: "V" }) }, [48606]: { RΦ: t => ({ TΦ: "F", r: __RΦ.a(24), p: [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "parameterIndex", t: () => __RΦ.a(16), b: void 0, v: null }], f: "" }) }, [48607]: { RΦ: t => ({ TΦ: "O", m: [{ n: "path", f: "", t: __RΦ.a(15) }, { n: "allow-ip", f: "", t: __RΦ.a(94) }] }) }, [94]: { RΦ: t => ({ TΦ: "[", e: __RΦ.a(15) }) }, [4]: { RΦ: t => ({ TΦ: "~" }) }, [48486]: { RΦ: t => ({ TΦ: "|", t: [__RΦ.a(1721), __RΦ.a(26047), __RΦ.a(26891)] }) }, [1721]: { LΦ: t => "all" }, [26047]: { LΦ: t => "get" }, [26891]: { LΦ: t => "post" }, [66]: { LΦ: t => Function }, [48620]: { RΦ: t => ({ TΦ: "F", r: __RΦ.a(1), p: [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }], f: "" }) }, [30]: { LΦ: t => Object }, [48704]: { TΦ: "5", name: "ApiPath" }, [48592]: { RΦ: t => ({ TΦ: "[", e: __RΦ.a(48495) }) }, [48495]: { RΦ: t => ({ TΦ: "O", m: [{ n: "paramKind", f: "", t: __RΦ.a(48494) }, { n: "target", f: "", t: __RΦ.a(1) }, { n: "propertyKey", f: "", t: __RΦ.a(15) }, { n: "parameterIndex", f: "", t: __RΦ.a(16) }, { n: "paramName", f: "?", t: __RΦ.a(15) }] }) }, [48494]: { RΦ: t => ({ TΦ: "|", t: [__RΦ.a(1903), __RΦ.a(4475), __RΦ.a(48491)] }) }, [1903]: { LΦ: t => "formData" }, [4475]: { LΦ: t => "path" }, [48491]: { LΦ: t => "query" }, [48699]: { TΦ: "5", name: "ApiItem" }, [48496]: { RΦ: t => ({ TΦ: "O", m: [{ n: "target", f: "", t: __RΦ.a(1) }, { n: "propertyKey", f: "", t: __RΦ.a(15) }, { n: "parameterIndex", f: "", t: __RΦ.a(16) }] }) }, [48490]: { RΦ: t => ({ TΦ: "O", m: [{ n: "method", f: "", t: __RΦ.a(48486) }, { n: "clazz", f: "", t: __RΦ.a(15) }, { n: "target", f: "", t: __RΦ.a(1) }, { n: "propertyKey", f: "", t: __RΦ.a(15) }, { n: "path", f: "", t: __RΦ.a(15) }] }) }, [48827]: { RΦ: t => ({ TΦ: "O", m: [{ n: "title", f: "", t: __RΦ.a(15) }, { n: "type", f: "", t: __RΦ.a(15) }, { n: "properties", f: "", t: __RΦ.a(30) }] }) }, [48485]: { RΦ: t => ({ TΦ: "|", t: [__RΦ.a(1721), __RΦ.a(4253), __RΦ.a(7285), __RΦ.a(26047), __RΦ.a(26891), __RΦ.a(26893), __RΦ.a(26895), __RΦ.a(26897)] }) }, [4253]: { LΦ: t => "head" }, [7285]: { LΦ: t => "options" }, [26893]: { LΦ: t => "put" }, [26895]: { LΦ: t => "delete" }, [26897]: { LΦ: t => "patch" }, [48830]: { RΦ: t => ({ TΦ: "[", e: __RΦ.a(30) }) }, [48843]: { RΦ: t => ({ TΦ: "|", t: [__RΦ.a(1903), __RΦ.a(4475), __RΦ.a(48491)] }) }, [48856]: { RΦ: t => ({ TΦ: "O", m: [{ n: "tags", f: "", t: __RΦ.a(94) }, { n: "summary", f: "", t: __RΦ.a(15) }, { n: "operationId", f: "", t: __RΦ.a(15) }, { n: "responses", f: "", t: __RΦ.a(30) }] }) }, [48497]: { TΦ: "5", name: "ApiSchema" }, [48690]: { RΦ: t => ({ TΦ: "O", m: [{ n: "openapi", f: "", t: __RΦ.a(15) }, { n: "info", f: "", t: __RΦ.a(48688) }, { n: "tags", f: "", t: __RΦ.a(76) }, { n: "paths", f: "", t: __RΦ.a(30) }, { n: "components", f: "", t: __RΦ.a(48689) }] }) }, [48688]: { RΦ: t => ({ TΦ: "O", m: [{ n: "title", f: "", t: __RΦ.a(15) }, { n: "description", f: "", t: __RΦ.a(15) }, { n: "license", f: "", t: __RΦ.a(48687) }, { n: "version", f: "", t: __RΦ.a(15) }] }) }, [48687]: { RΦ: t => ({ TΦ: "O", m: [{ n: "name", f: "", t: __RΦ.a(15) }] }) }, [76]: { RΦ: t => ({ TΦ: "[", e: __RΦ.a(1) }) }, [48689]: { RΦ: t => ({ TΦ: "O", m: [{ n: "schemas", f: "", t: __RΦ.a(30) }] }) }, [48489]: { RΦ: t => ({ TΦ: "|", t: [__RΦ.a(51), __RΦ.a(52), __RΦ.a(54), __RΦ.a(57), __RΦ.a(48487)] }) }, [51]: { LΦ: t => "string" }, [52]: { LΦ: t => "number" }, [54]: { LΦ: t => "boolean" }, [57]: { LΦ: t => "object" }, [48487]: { LΦ: t => "$ref" }, [22]: { LΦ: t => Boolean }, [48824]: { RΦ: t => ({ TΦ: "O", m: [] }) } } };
const typespeed_1 = require("typespeed");
const fs = require("fs");
require("reflect-metadata");
const typescript_rtti_1 = require("typescript-rtti");
const swaggerUi = require("swagger-ui-express");
const schemaMap = new Map();
const routerMap = new Map();
const requestBodyMap = new Map();
const requestParamMap = new Map();
function reqBody(target, propertyKey, parameterIndex) {
    const key = [target.constructor.name, propertyKey].toString();
    requestBodyMap.set(key, {
        "target": target,
        "propertyKey": propertyKey,
        "parameterIndex": parameterIndex
    });
    return (0, typespeed_1.reqBody)(target, propertyKey, parameterIndex);
}
exports.reqBody = reqBody;
__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "parameterIndex", t: () => __RΦ.a(16), b: void 0, v: null }])(reqBody);
__RΦ.m("rt:f", "F")(reqBody);
__RΦ.m("rt:t", () => __RΦ.a(24))(reqBody);
function reqParam(target, propertyKey, parameterIndex) {
    const key = [target.constructor.name, propertyKey].toString();
    if (!requestParamMap.has[key]) {
        requestParamMap.set(key, new Array());
    }
    requestParamMap.get(key).push({
        paramKind: "path", "target": target, "propertyKey": propertyKey, "parameterIndex": parameterIndex
    });
    return (0, typespeed_1.reqParam)(target, propertyKey, parameterIndex);
}
exports.reqParam = reqParam;
__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "parameterIndex", t: () => __RΦ.a(16), b: void 0, v: null }])(reqParam);
__RΦ.m("rt:f", "F")(reqParam);
__RΦ.m("rt:t", () => __RΦ.a(24))(reqParam);
function reqQuery(target, propertyKey, parameterIndex) {
    const key = [target.constructor.name, propertyKey].toString();
    if (!requestParamMap.has[key]) {
        requestParamMap.set(key, new Array());
    }
    requestParamMap.get(key).push({
        paramKind: "query", "target": target, "propertyKey": propertyKey, "parameterIndex": parameterIndex
    });
    return (0, typespeed_1.reqQuery)(target, propertyKey, parameterIndex);
}
exports.reqQuery = reqQuery;
__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "parameterIndex", t: () => __RΦ.a(16), b: void 0, v: null }])(reqQuery);
__RΦ.m("rt:f", "F")(reqQuery);
__RΦ.m("rt:t", () => __RΦ.a(24))(reqQuery);
function reqForm(paramName) {
    const handler = (0, typespeed_1.reqForm)(paramName);
    return __RΦ.f((target, propertyKey, parameterIndex) => {
        const key = [target.constructor.name, propertyKey].toString();
        if (!requestParamMap.has[key]) {
            requestParamMap.set(key, new Array());
        }
        requestParamMap.get(key).push({
            paramKind: "formData", "target": target, "propertyKey": propertyKey, "parameterIndex": parameterIndex,
            "paramName": paramName
        });
        return handler(target, propertyKey, parameterIndex);
    }, [__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "parameterIndex", t: () => __RΦ.a(16), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], "");
}
exports.reqForm = reqForm;
__RΦ.m("rt:p", [{ n: "paramName", t: () => __RΦ.a(15), b: void 0, v: null }])(reqForm);
__RΦ.m("rt:f", "F")(reqForm);
__RΦ.m("rt:t", () => __RΦ.a(48606))(reqForm);
function swaggerMiddleware(app, options, packageJsonPath) {
    const path = options && options.path || "/docs";
    const swaggerJsonPath = path + "/swagger.json";
    const checkAllowIp = __RΦ.f((req, res, next) => {
        const allowIp = options && options["allow-ip"] || ["127.0.0.1", "::1"];
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if (allowIp.indexOf(ip) !== -1)
            return next();
        res.status(403).send("Forbidden");
    }, [__RΦ.m("rt:p", [{ n: "req", t: () => __RΦ.a(4), b: void 0, v: null }, { n: "res", t: () => __RΦ.a(4), b: void 0, v: null }, { n: "next", t: () => __RΦ.a(4), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(1))], "checkAllowIp");
    const swggerOptions = { swaggerOptions: { url: swaggerJsonPath } };
    app.get(swaggerJsonPath, checkAllowIp, __RΦ.f((req, res) => res.json(swaggerDocument(packageJsonPath)), [__RΦ.m("rt:p", [{ n: "req", t: () => __RΦ.a(4), b: void 0, v: null }, { n: "res", t: () => __RΦ.a(4), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(1))], ""));
    app.use(path, checkAllowIp, swaggerUi.serveFiles(null, swggerOptions), swaggerUi.setup(null, swggerOptions));
}
exports.swaggerMiddleware = swaggerMiddleware;
__RΦ.m("rt:p", [{ n: "app", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "options", t: () => __RΦ.a(48607), b: void 0, v: null, f: "?" }, { n: "packageJsonPath", t: () => __RΦ.a(15), b: void 0, v: null, f: "?" }])(swaggerMiddleware);
__RΦ.m("rt:f", "F")(swaggerMiddleware);
__RΦ.m("rt:t", () => __RΦ.a(24))(swaggerMiddleware);
function toMapping(method, path, mappingMethod) {
    const handler = mappingMethod(path);
    return __RΦ.f((target, propertyKey) => {
        const key = [target.constructor.name, propertyKey].toString();
        if (!routerMap.has(key)) {
            routerMap.set(key, {
                "method": method,
                "path": path,
                "clazz": target.constructor.name,
                "target": target,
                "propertyKey": propertyKey
            });
        }
        return handler(target, propertyKey);
    }, [__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(1))], "");
}
__RΦ.m("rt:p", [{ n: "method", t: () => __RΦ.a(48486), b: void 0, v: null }, { n: "path", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "mappingMethod", t: () => __RΦ.a(66), b: void 0, v: null }])(toMapping);
__RΦ.m("rt:f", "F")(toMapping);
__RΦ.m("rt:t", () => __RΦ.a(48620))(toMapping);
function swaggerDocument(packageJsonPath) {
    if (routerMap.size === 0)
        return;
    const apiDocument = new ApiDocument();
    if (packageJsonPath) {
        try {
            const jsonContents = fs.readFileSync(packageJsonPath, 'utf8');
            const packageJson = JSON.parse(jsonContents);
            apiDocument.title = packageJson.name;
            apiDocument.description = packageJson.description;
            apiDocument.version = packageJson.version;
            apiDocument.license = packageJson.license;
            apiDocument.openapi = packageJson.openapi;
        }
        catch (err) {
            (0, typespeed_1.error)(`Error reading file from disk: ${err}`);
        }
    }
    routerMap.forEach(__RΦ.f((router, key) => {
        const apiPath = createApiPath(router);
        if (requestBodyMap.has(key)) {
            handleRequestBody(apiPath, requestBodyMap.get(key));
        }
        if (requestParamMap.has(key)) {
            handleRequestParams(apiPath, requestParamMap.get(key));
        }
        apiDocument.addPath(router.path, apiPath);
    }, [__RΦ.m("rt:p", [{ n: "router", t: () => __RΦ.a(4), b: void 0, v: null }, { n: "key", t: () => __RΦ.a(4), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], ""));
    schemaMap.forEach(__RΦ.f((schema) => {
        apiDocument.addSchema(schema);
    }, [__RΦ.m("rt:p", [{ n: "schema", t: () => __RΦ.a(4), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], ""));
    return apiDocument.toDoc();
}
__RΦ.m("rt:p", [{ n: "packageJsonPath", t: () => __RΦ.a(15), b: void 0, v: null, f: "?" }])(swaggerDocument);
__RΦ.m("rt:f", "F")(swaggerDocument);
__RΦ.m("rt:t", () => __RΦ.a(30))(swaggerDocument);
;
const getMapping = __RΦ.f((value) => toMapping("get", value, typespeed_1.getMapping), [__RΦ.m("rt:p", [{ n: "value", t: () => __RΦ.a(15), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(48620))], "getMapping");
exports.getMapping = getMapping;
const postMapping = __RΦ.f((value) => toMapping("post", value, typespeed_1.postMapping), [__RΦ.m("rt:p", [{ n: "value", t: () => __RΦ.a(15), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(48620))], "postMapping");
exports.postMapping = postMapping;
const requestMapping = __RΦ.f((value) => toMapping("all", value, typespeed_1.requestMapping), [__RΦ.m("rt:p", [{ n: "value", t: () => __RΦ.a(15), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(48620))], "requestMapping");
exports.requestMapping = requestMapping;
function handleRealType(realType, callback) {
    if (typeof realType === "function") {
        if (/^class\s/.test(realType.toString())) {
            handleComponent(realType);
            callback(ApiItem.fromType("$ref", realType.name));
        }
        else {
            callback(ApiItem.fromType(realType.name.toLowerCase()));
        }
    }
    else if (realType["TΦ"] === 'V') {
        callback();
    }
    else if (realType["TΦ"] === 'O') {
        callback(ApiItem.fromType("object"));
    }
    else if (realType["TΦ"] === '~') {
        callback(ApiItem.fromType("string"));
    }
    else if (realType["TΦ"] === '[') {
        const deepRealType = realType["e"];
        if (/^class\s/.test(deepRealType.toString())) {
            handleComponent(deepRealType);
            callback(ApiItem.fromArray("$ref", deepRealType.name));
        }
        else {
            callback(ApiItem.fromArray(deepRealType.name.toLowerCase()));
        }
    }
    else {
        callback(ApiItem.fromType("string"));
    }
}
__RΦ.m("rt:p", [{ n: "realType", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "callback", t: () => __RΦ.a(66), b: void 0, v: null }])(handleRealType);
__RΦ.m("rt:f", "F")(handleRealType);
__RΦ.m("rt:t", () => __RΦ.a(24))(handleRealType);
function handleRequestParams(apiPath, params) {
    params.forEach(__RΦ.f(param => {
        const paramType = (0, typescript_rtti_1.reflect)(param.target[param.propertyKey], { TΦ: "c", t: void 0, p: [__RΦ.a(1)], r: void 0, tp: [] }).parameters[param.parameterIndex];
        if (!paramType || !paramType.type || paramType.type["_ref"])
            return;
        const realType = paramType.type["_ref"];
        handleRealType(realType, __RΦ.f((item) => {
            apiPath.addParameter(param.paramKind, param.paramName || paramType.name, item);
        }, [__RΦ.m("rt:p", [{ n: "item", t: () => __RΦ.a(48699), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], ""));
    }, [__RΦ.m("rt:p", [{ n: "param", t: () => __RΦ.a(4), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], ""));
}
__RΦ.m("rt:p", [{ n: "apiPath", t: () => __RΦ.a(48704), b: void 0, v: null }, { n: "params", t: () => __RΦ.a(48592), b: void 0, v: null }])(handleRequestParams);
__RΦ.m("rt:f", "F")(handleRequestParams);
__RΦ.m("rt:t", () => __RΦ.a(24))(handleRequestParams);
function handleRequestBody(apiPath, bodyParam) {
    const { target, propertyKey, parameterIndex } = bodyParam;
    const paramType = (0, typescript_rtti_1.reflect)(target[propertyKey], { TΦ: "c", t: void 0, p: [__RΦ.a(1)], r: void 0, tp: [] }).parameters[parameterIndex];
    if (!paramType || !paramType.type || paramType.type["_ref"])
        return;
    const realType = paramType.type["_ref"];
    handleRealType(realType, __RΦ.f((item) => {
        apiPath.addRequestBody(item);
    }, [__RΦ.m("rt:p", [{ n: "item", t: () => __RΦ.a(48699), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], ""));
}
__RΦ.m("rt:p", [{ n: "apiPath", t: () => __RΦ.a(48704), b: void 0, v: null }, { n: "bodyParam", t: () => __RΦ.a(48496), b: void 0, v: null }])(handleRequestBody);
__RΦ.m("rt:f", "F")(handleRequestBody);
__RΦ.m("rt:t", () => __RΦ.a(24))(handleRequestBody);
function createApiPath(router) {
    const { method, clazz, target, propertyKey } = router;
    const apiPath = new ApiPath(method, clazz, propertyKey);
    const responseType = (0, typescript_rtti_1.reflect)(target[propertyKey], { TΦ: "c", t: void 0, p: [__RΦ.a(1)], r: void 0, tp: [] }).returnType;
    if (!responseType || responseType["_ref"])
        return apiPath;
    let realType = responseType["_ref"];
    if (responseType.isPromise()) {
        realType = responseType["_ref"]["p"][0];
    }
    handleRealType(realType, __RΦ.f((item) => {
        if (item === undefined) {
            apiPath.addResponse("200", "OK");
        }
        else {
            apiPath.addResponse("200", "OK", item);
        }
    }, [__RΦ.m("rt:p", [{ n: "item", t: () => __RΦ.a(48699), b: void 0, v: null, f: "?" }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], ""));
    return apiPath;
}
__RΦ.m("rt:p", [{ n: "router", t: () => __RΦ.a(48490), b: void 0, v: null }])(createApiPath);
__RΦ.m("rt:f", "F")(createApiPath);
__RΦ.m("rt:t", () => __RΦ.a(48704))(createApiPath);
function handleComponent(target) {
    const ref = (0, typescript_rtti_1.reflect)(target, { TΦ: "c", t: void 0, p: [__RΦ.a(1)], r: void 0, tp: [] });
    const obj = new target;
    const apiSchema = new ApiSchema(target.name);
    Object.getOwnPropertyNames(obj).forEach(__RΦ.f(k => {
        const params = ref.getParameter(k);
        if (params && params.type && params.type["_ref"]) {
            handleRealType(params.type["_ref"], __RΦ.f((item) => {
                apiSchema.addProperty(k, item);
            }, [__RΦ.m("rt:p", [{ n: "item", t: () => __RΦ.a(48699), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], ""));
        }
    }, [__RΦ.m("rt:p", [{ n: "k", t: () => __RΦ.a(4), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], ""));
    schemaMap.set(target.name, apiSchema);
}
__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(4), b: void 0, v: null }])(handleComponent);
__RΦ.m("rt:f", "F")(handleComponent);
__RΦ.m("rt:t", () => __RΦ.a(24))(handleComponent);
class ApiSchema {
    constructor(title) {
        this.properties = {};
        this.title = title;
    }
    addProperty(name, item) {
        this.properties[name] = item.toDoc();
    }
    toDoc() {
        return {
            "title": this.title,
            "type": "object",
            "properties": this.properties
        };
    }
}
(t => __RΦ.t[48497] = t)(ApiSchema);
__RΦ.m("rt:SP", [])(ApiSchema);
__RΦ.m("rt:P", ["title", "properties"])(ApiSchema);
__RΦ.m("rt:Sm", [])(ApiSchema);
__RΦ.m("rt:m", ["addProperty", "toDoc"])(ApiSchema);
__RΦ.m("rt:p", [{ n: "title", t: () => __RΦ.a(15), b: void 0, v: null }])(ApiSchema);
__RΦ.m("rt:f", "C")(ApiSchema);
__RΦ.m("rt:t", () => __RΦ.a(15))(ApiSchema.prototype, "title");
__RΦ.m("rt:f", "P$")(ApiSchema.prototype, "title");
__RΦ.m("rt:t", () => __RΦ.a(30))(ApiSchema.prototype, "properties");
__RΦ.m("rt:f", "P$")(ApiSchema.prototype, "properties");
__RΦ.m("rt:f", "M.")(ApiSchema.prototype["addProperty"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiSchema.prototype, "addProperty");
__RΦ.m("rt:p", [{ n: "name", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "item", t: () => __RΦ.a(48699), b: void 0, v: null }])(ApiSchema.prototype, "addProperty");
__RΦ.m("rt:f", "M.")(ApiSchema.prototype, "addProperty");
__RΦ.m("rt:t", () => __RΦ.a(24))(ApiSchema.prototype, "addProperty");
__RΦ.m("rt:f", "M.")(ApiSchema.prototype["toDoc"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiSchema.prototype, "toDoc");
__RΦ.m("rt:p", [])(ApiSchema.prototype, "toDoc");
__RΦ.m("rt:f", "M.")(ApiSchema.prototype, "toDoc");
__RΦ.m("rt:t", () => __RΦ.a(48827))(ApiSchema.prototype, "toDoc");
class ApiPath {
    constructor(method, tagName, summary) {
        this.responses = {};
        this.parameters = [];
        this.method = method;
        this.summary = summary;
        this.tagName = tagName;
    }
    addResponse(statusCode, description, itemObject) {
        if (!itemObject) {
            this.responses[statusCode] = {
                "description": description
            };
            return;
        }
        this.responses[statusCode] = {
            "description": description,
            "content": {
                "*/*": {
                    "schema": itemObject.toDoc()
                }
            }
        };
    }
    addParameter(paramIn, name, itemObject) {
        this.parameters.push({
            "name": name,
            "in": paramIn,
            "style": "form",
            "required": true,
            "schema": itemObject.toDoc()
        });
    }
    addRequestBody(itemObject) {
        this.requestBody = {
            "content": {
                "*/*": {
                    "schema": itemObject.toDoc()
                }
            }
        };
    }
    toDoc() {
        const doc = {
            "tags": [this.tagName],
            "summary": this.summary,
            "operationId": this.summary + this.method.charAt(0).toUpperCase() + this.method.slice(1),
            "responses": this.responses,
        };
        if (this.requestBody)
            doc["requestBody"] = this.requestBody;
        if (this.parameters.length > 0)
            doc["parameters"] = this.parameters;
        return doc;
    }
}
(t => __RΦ.t[48704] = t)(ApiPath);
__RΦ.m("rt:SP", [])(ApiPath);
__RΦ.m("rt:P", ["tagName", "summary", "method", "responses", "parameters", "requestBody"])(ApiPath);
__RΦ.m("rt:Sm", [])(ApiPath);
__RΦ.m("rt:m", ["addResponse", "addParameter", "addRequestBody", "toDoc"])(ApiPath);
__RΦ.m("rt:p", [{ n: "method", t: () => __RΦ.a(48485), b: void 0, v: null }, { n: "tagName", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "summary", t: () => __RΦ.a(15), b: void 0, v: null }])(ApiPath);
__RΦ.m("rt:f", "C")(ApiPath);
__RΦ.m("rt:t", () => __RΦ.a(15))(ApiPath.prototype, "tagName");
__RΦ.m("rt:f", "P$")(ApiPath.prototype, "tagName");
__RΦ.m("rt:t", () => __RΦ.a(15))(ApiPath.prototype, "summary");
__RΦ.m("rt:f", "P$")(ApiPath.prototype, "summary");
__RΦ.m("rt:t", () => __RΦ.a(48485))(ApiPath.prototype, "method");
__RΦ.m("rt:f", "P$")(ApiPath.prototype, "method");
__RΦ.m("rt:t", () => __RΦ.a(30))(ApiPath.prototype, "responses");
__RΦ.m("rt:f", "P$")(ApiPath.prototype, "responses");
__RΦ.m("rt:t", () => __RΦ.a(48830))(ApiPath.prototype, "parameters");
__RΦ.m("rt:f", "P$")(ApiPath.prototype, "parameters");
__RΦ.m("rt:t", () => __RΦ.a(30))(ApiPath.prototype, "requestBody");
__RΦ.m("rt:f", "P$")(ApiPath.prototype, "requestBody");
__RΦ.m("rt:f", "M.")(ApiPath.prototype["addResponse"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiPath.prototype, "addResponse");
__RΦ.m("rt:p", [{ n: "statusCode", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "description", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "itemObject", t: () => __RΦ.a(48699), b: void 0, v: null, f: "?" }])(ApiPath.prototype, "addResponse");
__RΦ.m("rt:f", "M.")(ApiPath.prototype, "addResponse");
__RΦ.m("rt:t", () => __RΦ.a(24))(ApiPath.prototype, "addResponse");
__RΦ.m("rt:f", "M.")(ApiPath.prototype["addParameter"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiPath.prototype, "addParameter");
__RΦ.m("rt:p", [{ n: "paramIn", t: () => __RΦ.a(48843), b: void 0, v: null }, { n: "name", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "itemObject", t: () => __RΦ.a(48699), b: void 0, v: null }])(ApiPath.prototype, "addParameter");
__RΦ.m("rt:f", "M.")(ApiPath.prototype, "addParameter");
__RΦ.m("rt:t", () => __RΦ.a(24))(ApiPath.prototype, "addParameter");
__RΦ.m("rt:f", "M.")(ApiPath.prototype["addRequestBody"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiPath.prototype, "addRequestBody");
__RΦ.m("rt:p", [{ n: "itemObject", t: () => __RΦ.a(48699), b: void 0, v: null }])(ApiPath.prototype, "addRequestBody");
__RΦ.m("rt:f", "M.")(ApiPath.prototype, "addRequestBody");
__RΦ.m("rt:t", () => __RΦ.a(24))(ApiPath.prototype, "addRequestBody");
__RΦ.m("rt:f", "M.")(ApiPath.prototype["toDoc"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiPath.prototype, "toDoc");
__RΦ.m("rt:p", [])(ApiPath.prototype, "toDoc");
__RΦ.m("rt:f", "M.")(ApiPath.prototype, "toDoc");
__RΦ.m("rt:t", () => __RΦ.a(48856))(ApiPath.prototype, "toDoc");
class ApiDocument {
    constructor() {
        this.tags = {};
        this.schemas = {};
        this.paths = {};
    }
    addSchema(schema) {
        this.schemas[schema.title] = schema.toDoc();
    }
    addPath(path, pathObject) {
        this.tags[pathObject.tagName] = { "name": pathObject.tagName };
        if (!this.paths[path])
            this.paths[path] = {};
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
            "tags": Array.from(Object.values(this.tags)),
            "paths": this.paths,
            "components": {
                "schemas": this.schemas
            }
        };
    }
}
(t => __RΦ.t[48622] = t)(ApiDocument);
__RΦ.m("rt:SP", [])(ApiDocument);
__RΦ.m("rt:P", ["title", "description", "license", "version", "openapi", "tags", "schemas", "paths"])(ApiDocument);
__RΦ.m("rt:Sm", [])(ApiDocument);
__RΦ.m("rt:m", ["addSchema", "addPath", "toDoc"])(ApiDocument);
__RΦ.m("rt:f", "C")(ApiDocument);
__RΦ.m("rt:t", () => __RΦ.a(15))(ApiDocument.prototype, "title");
__RΦ.m("rt:f", "P")(ApiDocument.prototype, "title");
__RΦ.m("rt:t", () => __RΦ.a(15))(ApiDocument.prototype, "description");
__RΦ.m("rt:f", "P")(ApiDocument.prototype, "description");
__RΦ.m("rt:t", () => __RΦ.a(15))(ApiDocument.prototype, "license");
__RΦ.m("rt:f", "P")(ApiDocument.prototype, "license");
__RΦ.m("rt:t", () => __RΦ.a(15))(ApiDocument.prototype, "version");
__RΦ.m("rt:f", "P")(ApiDocument.prototype, "version");
__RΦ.m("rt:t", () => __RΦ.a(15))(ApiDocument.prototype, "openapi");
__RΦ.m("rt:f", "P")(ApiDocument.prototype, "openapi");
__RΦ.m("rt:t", () => __RΦ.a(30))(ApiDocument.prototype, "tags");
__RΦ.m("rt:f", "P#")(ApiDocument.prototype, "tags");
__RΦ.m("rt:t", () => __RΦ.a(30))(ApiDocument.prototype, "schemas");
__RΦ.m("rt:f", "P#")(ApiDocument.prototype, "schemas");
__RΦ.m("rt:t", () => __RΦ.a(30))(ApiDocument.prototype, "paths");
__RΦ.m("rt:f", "P#")(ApiDocument.prototype, "paths");
__RΦ.m("rt:f", "M.")(ApiDocument.prototype["addSchema"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiDocument.prototype, "addSchema");
__RΦ.m("rt:p", [{ n: "schema", t: () => __RΦ.a(48497), b: void 0, v: null }])(ApiDocument.prototype, "addSchema");
__RΦ.m("rt:f", "M.")(ApiDocument.prototype, "addSchema");
__RΦ.m("rt:t", () => __RΦ.a(24))(ApiDocument.prototype, "addSchema");
__RΦ.m("rt:f", "M.")(ApiDocument.prototype["addPath"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiDocument.prototype, "addPath");
__RΦ.m("rt:p", [{ n: "path", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "pathObject", t: () => __RΦ.a(48704), b: void 0, v: null }])(ApiDocument.prototype, "addPath");
__RΦ.m("rt:f", "M.")(ApiDocument.prototype, "addPath");
__RΦ.m("rt:t", () => __RΦ.a(24))(ApiDocument.prototype, "addPath");
__RΦ.m("rt:f", "M.")(ApiDocument.prototype["toDoc"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiDocument.prototype, "toDoc");
__RΦ.m("rt:p", [])(ApiDocument.prototype, "toDoc");
__RΦ.m("rt:f", "M.")(ApiDocument.prototype, "toDoc");
__RΦ.m("rt:t", () => __RΦ.a(48690))(ApiDocument.prototype, "toDoc");
class ApiItem {
    constructor() {
        this.isArray = false;
    }
    static fromArray(typeKey, typeRef) {
        const item = new ApiItem();
        item.typeKey = typeKey;
        item.isArray = true;
        item.typeRef = typeRef;
        return item;
    }
    static fromType(typeKey, typeRef) {
        const item = new ApiItem();
        item.typeKey = typeKey;
        item.typeRef = typeRef;
        return item;
    }
    toDoc() {
        let items = {};
        if (this.typeKey === "$ref") {
            items = {
                "$ref": "#/components/schemas/" + this.typeRef
            };
        }
        else {
            items = {
                "type": this.typeKey
            };
        }
        if (this.isArray) {
            items = {
                "type": "array",
                "items": items
            };
        }
        return items;
    }
}
(t => __RΦ.t[48699] = t)(ApiItem);
__RΦ.m("rt:SP", [])(ApiItem);
__RΦ.m("rt:P", ["typeKey", "isArray", "typeRef"])(ApiItem);
__RΦ.m("rt:Sm", ["fromArray", "fromType"])(ApiItem);
__RΦ.m("rt:m", ["toDoc"])(ApiItem);
__RΦ.m("rt:f", "C")(ApiItem);
__RΦ.m("rt:t", () => __RΦ.a(48489))(ApiItem.prototype, "typeKey");
__RΦ.m("rt:f", "P$")(ApiItem.prototype, "typeKey");
__RΦ.m("rt:t", () => __RΦ.a(22))(ApiItem.prototype, "isArray");
__RΦ.m("rt:f", "P$?")(ApiItem.prototype, "isArray");
__RΦ.m("rt:t", () => __RΦ.a(15))(ApiItem.prototype, "typeRef");
__RΦ.m("rt:f", "P$?")(ApiItem.prototype, "typeRef");
__RΦ.m("rt:f", "MS.")(ApiItem["fromArray"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiItem, "fromArray");
__RΦ.m("rt:p", [{ n: "typeKey", t: () => __RΦ.a(48489), b: void 0, v: null }, { n: "typeRef", t: () => __RΦ.a(15), b: void 0, v: null, f: "?" }])(ApiItem, "fromArray");
__RΦ.m("rt:f", "MS.")(ApiItem, "fromArray");
__RΦ.m("rt:t", () => __RΦ.a(48699))(ApiItem, "fromArray");
__RΦ.m("rt:f", "MS.")(ApiItem["fromType"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiItem, "fromType");
__RΦ.m("rt:p", [{ n: "typeKey", t: () => __RΦ.a(48489), b: void 0, v: null }, { n: "typeRef", t: () => __RΦ.a(15), b: void 0, v: null, f: "?" }])(ApiItem, "fromType");
__RΦ.m("rt:f", "MS.")(ApiItem, "fromType");
__RΦ.m("rt:t", () => __RΦ.a(48699))(ApiItem, "fromType");
__RΦ.m("rt:f", "M$.")(ApiItem.prototype["toDoc"]);
((t, p) => __RΦ.m("rt:h", () => typeof t === "object" ? t.constructor : t)(t[p]))(ApiItem.prototype, "toDoc");
__RΦ.m("rt:p", [])(ApiItem.prototype, "toDoc");
__RΦ.m("rt:f", "M$.")(ApiItem.prototype, "toDoc");
__RΦ.m("rt:t", () => __RΦ.a(48824))(ApiItem.prototype, "toDoc");
