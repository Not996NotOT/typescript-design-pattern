import React, { Component } from 'react'
import { Button } from 'antd'
import SqlServerFactory from './class/SqlServerFactory'
import User from './models/User'
import Department from './models/Department'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {
        let dbFactory = new SqlServerFactory();
        let userAction = dbFactory.CreateUser();
        let departmentAction = dbFactory.CreateDepartment();
        userAction.Insert(new User());
        userAction.GetUserById(1);
        departmentAction.Insert(new Department());
        departmentAction.GetDepartmentById(1);
    }
    render() {
        return (
            <div>
                <div>
                    按F12查看效果
                </div>
                <Button onClick={this.handleClick}>调用数据库</Button>
            </div>
        )
    }
}
