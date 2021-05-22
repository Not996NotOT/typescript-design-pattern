import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from '../views/Index'
import MyLayout from '../layout/MyLayout'
import SimpleFactory from '../components/simplefactory/Index';
import Strategy from '../components/strategy/Index';
import Decorator from '../components/decorator/Index';
import Factory from '../components/factory/Index';
import Prototype from '../components/prototype/Index';
import Template from '../components/template/Index';
import Facade from '../components/facade/Index';
import Builder from '../components/builder/Index';
import Observer from '../components/observer/Index';
import AbstractFactory from '../components/abstractfactory/Index';
import StatePattern from '../components/state/Index';
import Adapter from '../components/adapter/Index';
import Momento from '../components/momento/Index';
import Composite from '../components/composite/Index';
import Singleton from '../components/singleton/Index';
import Bridge from '../components/bridge/Index';
import ChainOfResponsibility from '../components/chainofresponsibility/Index';
import Mediator from '../components/mediator/Index';
import Command from '../components/command/Index';
import Visitor from '../components/visitor/Index';
import Iterator from '../components/iterator/Index';
import Interpreter from '../components/interpreter/Index';
import Flyweight from '../components/flyweight/Index';
interface Props {

}
interface State {

}

export default class Routers extends Component<Props, State> {
    state = {}
    render() {
        return (
            <Router>
                <MyLayout>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/flyweight" component={Flyweight} />
                    <Route exact path="/interpreter" component={Interpreter} />
                    <Route exact path="/iterator" component={Iterator} />
                    <Route exact path="/visitor" component={Visitor} />
                    <Route exact path="/command" component={Command} />
                    <Route exact path="/mediator" component={Mediator} />
                    <Route exact path="/chainofresponsibility" component={ChainOfResponsibility} />
                    <Route exact path="/bridge" component={Bridge} />
                    <Route exact path="/singleton" component={Singleton} />
                    <Route exact path="/composite" component={Composite} />
                    <Route exact path="/momento" component={Momento} />
                    <Route exact path="/adapter" component={Adapter} />
                    <Route exact path="/state" component={StatePattern} />
                    <Route exact path="/abstractfactory" component={AbstractFactory} />
                    <Route exact path="/observer" component={Observer} />
                    <Route exact path="/simplefactory" component={SimpleFactory} />
                    <Route exact path="/strategy" component={Strategy} />
                    <Route exact path="/decorator" component={Decorator} />
                    <Route exact path="/factory" component={Factory} />
                    <Route exact path="/prototype" component={Prototype} />
                    <Route exact path="/template" component={Template} />
                    <Route exact path="/facade" component={Facade} />
                    <Route exact path="/builder" component={Builder} />
                </MyLayout>
            </Router>
        )
    }
}

