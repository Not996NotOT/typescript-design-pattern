import IUser from "../interface/IUser";
import User from '../models/User'

export default class SqlServerUser implements IUser {
    Insert(user: User): User {
        console.log("SqlServer插入用户数据");
        return new User();
    }
    GetUserById(id: number): User {
        console.log("SqlServer获得用户数据");
        return new User();
    }
}