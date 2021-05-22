import User from "../models/User";

export default interface IUser {
    Insert(user:User):User;
    GetUserById(id:number):User;
}