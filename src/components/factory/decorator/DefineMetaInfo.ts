import "reflect-metadata";
import AbsComputeFactory from "../abstract/AbsComputeFactory";

function MetaClass() {
    return function (target: Function) {
        Reflect.defineMetadata(target.name, target.prototype, target.prototype, target.name);
    }
}

function GetMetaClass(className: string) {
    return Reflect.getMetadata(className, AbsComputeFactory, className);
}

export { MetaClass, GetMetaClass };
