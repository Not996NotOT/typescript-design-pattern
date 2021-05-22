import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {

}
interface State {

}

export default class MyLayout extends Component<Props, State> {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"  >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>创建型模式</span>
                </span>
              }
            >
              <Menu.Item key="simplefactory">
                <NavLink to="/simplefactory">
                  简单工厂模式
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="Abstract Factory">
                <NavLink to="/abstractfactory">抽象工厂模式
                </NavLink></Menu.Item>
              <Menu.Item key="Builder">
                <NavLink to="builder">
                  建造者模式
                  </NavLink></Menu.Item>
              <Menu.Item key="Factory Method">
                <NavLink to="/factory">
                  工厂方法模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Prototype">
                <NavLink to="/prototype">
                  原型模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Singleton">
                <NavLink to="/singleton">
                  单例模式
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <span>结构型模式</span>
                </span>
              }
            >
              <Menu.Item key="Adapter"><NavLink to="/adapter">适配器模式</NavLink></Menu.Item>
              <Menu.Item key="Bridge">
                <NavLink to="/bridge">
                  桥接模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Composite">
                <NavLink to="/composite">
                  组合模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Decorator">
                <NavLink to="/decorator">
                  装饰模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Facade">
                <NavLink to="/facade">
                  外观模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Flyweight">
                <NavLink to="/flyweight">
                  享元模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Proxy">
                <NavLink to="/proxy">
                  代理模式
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <span>行为型模式</span>
                </span>
              }
            >
              <Menu.Item key="Chain of Responsibility">
                <NavLink to="/chainofresponsibility">
                  职责链模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Command">
                <NavLink to="/command">
                  命令模式
                  </NavLink></Menu.Item>
              <Menu.Item key="Interpreter">
                <NavLink to="/interpreter">
                  解释器模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Iterator">
                <NavLink to="/iterator">
                  迭代器模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Mediator">
                <NavLink to="/mediator">
                  中介者模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Memento">
                <NavLink to="/momento">
                  备忘录模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Observer">
                <NavLink to="observer">
                  观察者模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="State">
                <NavLink to="state">
                  状态模式
                 </NavLink>
              </Menu.Item>
              <Menu.Item key="Strategy">
                <NavLink to="/strategy">
                  策略模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Template Method">
                <NavLink to="/template">
                  模板方法模式
                </NavLink>
              </Menu.Item>
              <Menu.Item key="Visitor">
                <NavLink to="/visitor">
                  访问者模式
                </NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>

        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Typescript Design Pattern </Footer>
        </Layout>
      </Layout >
    )
  }
}
