import React, { Component } from 'react'
import { Button } from 'antd'
import ChinaMeseum from './class/ChinaMeseum'
import EnglandVisitor from './class/EnglandVisitor'
import ChinaVisitor from './class/ChinaVisitor'

interface Props {
    
}
interface State {
    
}

export default class index extends Component<Props, State> {
    state = {}

    handleClick=()=>{
        let meseum = new ChinaMeseum();
        meseum.Accept(new EnglandVisitor());
        meseum.Accept(new ChinaVisitor());
    }
    render() {
        return (
            <div>
                <div>请按F12查看效果</div>
                <Button onClick={this.handleClick}>
                    游客访问博物馆
                </Button>
            </div>
        )
    }
}
