import IDepartment from "../interface/IDepartment";
import Department from "../models/Department";

export default class SqlServerDepartment implements IDepartment {
    Insert(department: Department): Department {
        console.log("SqlServer插入部门数据");
        return new Department();
    }
    GetDepartmentById(id: number): Department {
        console.log("SqlServer获取部门数据");
        return new Department();
    }
}