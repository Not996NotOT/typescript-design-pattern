import IDepartment from "../interface/IDepartment";
import Department from "../models/Department";

export default class AccessDepartment implements IDepartment {
    Insert(department: Department): Department {
        console.log("Access插入部门")
        return new Department();
    }
    GetDepartmentById(id: number): Department {
        console.log("Access获得部门")
        return new Department();
    }
}