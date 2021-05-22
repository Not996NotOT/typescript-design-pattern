import IFactory from "../interface/IFactory";
import AccessDepartment from "./AccessDepartment";
import AccessUser from "./AccessUser";

export default class AccessFactory implements IFactory {
    CreateUser(): AccessUser {
        return new AccessUser();
    }
    CreateDepartment(): AccessDepartment {
        return new AccessDepartment();
    }
}