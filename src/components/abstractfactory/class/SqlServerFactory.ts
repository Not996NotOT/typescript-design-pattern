import IFactory from "../interface/IFactory";
import SqlServerUser from "./SqlServerUser";
import SqlServerDepartment from "./SqlServerDepartment";

export default class SqlServerFactory implements IFactory {
     CreateUser(): SqlServerUser {
        return new SqlServerUser();
    }
    CreateDepartment(): SqlServerDepartment {
        return new SqlServerDepartment();
    }
}