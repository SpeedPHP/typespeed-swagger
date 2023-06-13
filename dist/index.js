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
    }, t: { [1]: { RΦ: t => ({ TΦ: "~" }) }, [15]: { LΦ: t => String }, [16]: { LΦ: t => Number }, [24]: { RΦ: t => ({ TΦ: "V" }) }, [66]: { LΦ: t => Function }, [46546]: { RΦ: t => ({ TΦ: "F", r: __RΦ.a(1), p: [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "parameterIndex", t: () => __RΦ.a(16), b: void 0, v: null }], f: "" }) }, [39]: { RΦ: t => ({ TΦ: "O", m: [] }) }, [46553]: { RΦ: t => ({ TΦ: "F", r: __RΦ.a(1), p: [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }], f: "" }) }, [4]: { RΦ: t => ({ TΦ: "~" }) } } };
const typespeed_1 = require("typespeed");
require("reflect-metadata");
const typescript_rtti_1 = require("typescript-rtti");
const swaggerUi = require("swagger-ui-express");
function reqBody(target, propertyKey, parameterIndex) {
    return (0, typespeed_1.reqBody)(target, propertyKey, parameterIndex);
}
exports.reqBody = reqBody;
__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "parameterIndex", t: () => __RΦ.a(16), b: void 0, v: null }])(reqBody);
__RΦ.m("rt:f", "F")(reqBody);
__RΦ.m("rt:t", () => __RΦ.a(24))(reqBody);
function toRequestParams(paramName, requestMethod) {
    const handler = requestMethod(paramName);
    return __RΦ.f((target, propertyKey, parameterIndex) => {
        return handler(target, propertyKey, parameterIndex);
    }, [__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "parameterIndex", t: () => __RΦ.a(16), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(1))], "");
}
__RΦ.m("rt:p", [{ n: "paramName", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "requestMethod", t: () => __RΦ.a(66), b: void 0, v: null }])(toRequestParams);
__RΦ.m("rt:f", "F")(toRequestParams);
__RΦ.m("rt:t", () => __RΦ.a(46546))(toRequestParams);
function swaggerMiddleware(app, options) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/example.json"
        }
    }));
}
exports.swaggerMiddleware = swaggerMiddleware;
__RΦ.m("rt:p", [{ n: "app", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "options", t: () => __RΦ.a(39), b: void 0, v: null, f: "?" }])(swaggerMiddleware);
__RΦ.m("rt:f", "F")(swaggerMiddleware);
__RΦ.m("rt:t", () => __RΦ.a(24))(swaggerMiddleware);
function toMapping(value, mappingMethod, responseClass) {
    const handler = mappingMethod(value);
    return __RΦ.f((target, propertyKey) => {
        const returnType = Reflect.getMetadata('design:returntype', target, propertyKey);
        if (responseClass !== undefined) {
            getInfoByObjcet(responseClass);
        }
        else if (returnType !== undefined && returnType !== Promise) {
            getInfoByObjcet(returnType);
        }
        else {
            { }
            ;
        }
        return handler(target, propertyKey);
    }, [__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(1), b: void 0, v: null }, { n: "propertyKey", t: () => __RΦ.a(15), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(1))], "");
}
__RΦ.m("rt:p", [{ n: "value", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "mappingMethod", t: () => __RΦ.a(66), b: void 0, v: null }, { n: "responseClass", t: () => __RΦ.a(1), b: void 0, v: null, f: "?" }])(toMapping);
__RΦ.m("rt:f", "F")(toMapping);
__RΦ.m("rt:t", () => __RΦ.a(46553))(toMapping);
const reqQuery = __RΦ.f((paramName) => toRequestParams(paramName, typespeed_1.reqQuery), [__RΦ.m("rt:p", [{ n: "paramName", t: () => __RΦ.a(15), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(46546))], "reqQuery");
exports.reqQuery = reqQuery;
const reqForm = __RΦ.f((paramName) => toRequestParams(paramName, typespeed_1.reqForm), [__RΦ.m("rt:p", [{ n: "paramName", t: () => __RΦ.a(15), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(46546))], "reqForm");
exports.reqForm = reqForm;
const reqParam = __RΦ.f((paramName) => toRequestParams(paramName, typespeed_1.reqParam), [__RΦ.m("rt:p", [{ n: "paramName", t: () => __RΦ.a(15), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(46546))], "reqParam");
exports.reqParam = reqParam;
const getMapping = __RΦ.f((value, responseClass) => toMapping(value, typespeed_1.getMapping, responseClass), [__RΦ.m("rt:p", [{ n: "value", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "responseClass", t: () => __RΦ.a(4), b: void 0, v: null, f: "?" }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(46553))], "getMapping");
exports.getMapping = getMapping;
const postMapping = __RΦ.f((value, responseClass) => toMapping(value, typespeed_1.postMapping, responseClass), [__RΦ.m("rt:p", [{ n: "value", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "responseClass", t: () => __RΦ.a(4), b: void 0, v: null, f: "?" }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(46553))], "postMapping");
exports.postMapping = postMapping;
const requestMapping = __RΦ.f((value, responseClass) => toMapping(value, typespeed_1.requestMapping, responseClass), [__RΦ.m("rt:p", [{ n: "value", t: () => __RΦ.a(15), b: void 0, v: null }, { n: "responseClass", t: () => __RΦ.a(4), b: void 0, v: null, f: "?" }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(46553))], "requestMapping");
exports.requestMapping = requestMapping;
function getInfoByObjcet(target) {
    console.log(target.name);
    const ref = (0, typescript_rtti_1.reflect)(target, { TΦ: "c", t: void 0, p: [__RΦ.a(1)], r: void 0, tp: [] });
    const obj = new target;
    Object.getOwnPropertyNames(obj).forEach(__RΦ.f(k => {
        const params = ref.getParameter(k);
        console.log(k, params.type.ref);
        const relatObj = params.type;
        if (/^class\s/.test(relatObj.ref)) {
            getInfoByObjcet(relatObj.class);
        }
    }, [__RΦ.m("rt:p", [{ n: "k", t: () => __RΦ.a(4), b: void 0, v: null }]), __RΦ.m("rt:f", "F>"), __RΦ.m("rt:t", () => __RΦ.a(24))], ""));
}
__RΦ.m("rt:p", [{ n: "target", t: () => __RΦ.a(4), b: void 0, v: null }])(getInfoByObjcet);
__RΦ.m("rt:f", "F")(getInfoByObjcet);
__RΦ.m("rt:t", () => __RΦ.a(24))(getInfoByObjcet);
