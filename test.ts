import 'reflect-metadata';
import { reflect, ReflectedFunction } from 'typescript-rtti';
const methodsOne = new Map();

class DataB{
	constructor(public age: number, public cc: DataC){}
}

class DataC{
	constructor(public bb: number){}
}

class DataA {
	constructor(public id: number, public name: string, public dataB: DataB, public cc: DataC){}
}

class Page {

	@responseMethod()
	public getDataA(aa: number): DataA {
		return new DataA(12, "zzz", new DataB(1, new DataC(2)), new DataC(3));
	}

	@responseMethod(DataA)
	public async getDataAsync(@paramOne("data") ccc: DataA): Promise<DataA> {
		return Promise.resolve(new DataA(12, "zzz", new DataB(2, new DataC(3)), new DataC(3)));
	}

}
// 和 GetMapping 一起用，有第二个参数可选，输入参数就是返回对象的类型
function responseMethod(clazz?) {
	return (target: any, propertyKey: string) => {
		const returnType = Reflect.getMetadata('design:returntype', target, propertyKey);

		// if (returnType === Promise) {
		// 	getParameterTwo(clazz)
		// }else{
		// 	getParameterTwo(returnType)
		// }
	}
}

function paramOne(path:string) {
	return (target: any, propertyKey: string, parameterIndex: number) => {
		const paramtypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
		methodsOne.set(target, propertyKey);
	}
}

setTimeout(() => {
	for(let [target, propertyKey] of methodsOne.entries()){
		const paramtypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
		paramtypes.forEach((paramtype) => {
			getParameterTwo(paramtype)
		})
	}
}, 1000);

function getParameterTwo(target) {
	console.log(target.name)
	const ref = reflect(target)
	const obj = new target;
	Object.getOwnPropertyNames(obj).forEach(k => {
		const params = ref.getParameter(k)
		console.log(k, params.type.ref)
		const relatObj = params.type
		if(/^class\s/.test(relatObj.ref)){
			getParameterTwo(relatObj.class)
		}
	})
}

// import * as swaggerUi from "swagger-ui-express"
// this.app.use(
// 	"/docs",
// 	swaggerUi.serve,
// 	swaggerUi.setup(undefined, {
// 	  swaggerOptions: {
// 		url: "/api-docs.json",
// 	  },
// 	})
//   );