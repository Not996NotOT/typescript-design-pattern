import React, { Component } from 'react'
import TestPage from './abstract/TestPage'
import StudentAMakeTestPage from './class/StudentAMakeTestPage'
import StudentBMakeTestPage from './class/StudentBMakeTestPage';

interface Props {
    
}
interface State {
    
}

export default class Index extends Component<Props, State> {
    state = {}
    componentDidMount(){
        let testPage:TestPage = new StudentAMakeTestPage("zhangxing");
        testPage.AnswerQuestion();
        let testPage2:TestPage = new StudentBMakeTestPage("小红");
        testPage2.AnswerQuestion();
    }
    render() {
        return (
            <div>
                请按F12控制台查看效果
            </div>
        )
    }
}
