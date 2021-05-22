import IDepartment from "./IDepartment";
import IUser from "./IUser";

export default interface IFactory {
    CreateUser():IUser;
    CreateDepartment(): IDepartment;
}