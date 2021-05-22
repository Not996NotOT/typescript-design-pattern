import IUser from "../interface/IUser";
import User from '../models/User';

export default class AccessUser implements IUser {
    Insert(user: User): User {
       console.log("给Access库插入用户信息");
       return new User();
    }
    GetUserById(id: number): User {
       console.log("根据id获取Access用户信息")
       return new User();
    }


}