import Department from "../models/Department";

export default interface IDepartment {
    Insert(department: Department): Department;
    GetDepartmentById(id: number): Department;
}