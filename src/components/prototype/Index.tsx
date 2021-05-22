import React, { Component } from 'react'
import { Form, Button } from 'antd'
import Resume from './class/Resume'

interface Props {

}
interface State {
    resumeStr: string
}

export default class Index extends Component<Props, State> {
    state = {
        resumeStr: ""
    }
    handleShowResume = () => {
        let resume = new Resume("张星");
        resume.SetPersonalInfo("男", 27);
        resume.SetWorkExperience("南京", "公司");
        let resumeStr = "";
        //let resume2 = resume;
        let resume2 = resume.Clone();
        resume.SetPersonalInfo("女", 24);
        resumeStr += resume.Display();
        resumeStr += resume2.Display();
        this.setState({
            resumeStr
        })
    }
    render() {
        return (
            <Form>
                <Form.Item>
                    {this.state.resumeStr}
                </Form.Item>
                <Form.Item>
                    <Button onClick={this.handleShowResume}>显示简历</Button>
                </Form.Item>
            </Form>
        )
    }
}
