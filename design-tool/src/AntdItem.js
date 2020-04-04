
import React, { useState, useContext, useRef, Fragment } from 'react';
import { Layout, Menu, Form, Input, Checkbox, Button } from 'antd'
import Draggable from 'react-draggable';
import { ItemSpring } from './Spring';

import { AppContext } from './App';
import produce from 'immer';

const { Header, Footer, Sider } = Layout;
const Sidebar_Color = 'rgb(59,160,233)';
const Content_Color = 'rgb(16,142,233)';
const Header_Color = 'rgb(125,188,234)';

export function ItemAnimation({ item, children }) {
  const main = useContext(AppContext);
  const [ani_state, AniControl] = useState('use');
  const boxRef = useRef();
  function drag_start(e) {
    AniControl('mouse_down');
  }
  function drag_ing(e, data) {
  }
  function drag_stop(e, data) {
    if (e.clientX > boxRef.current.offsetWidth) {
      main.SetLayout(true);
      AniControl('not_use');
      main.AddComponent(produce(draft => { draft.layout[0] = children; }));
      //  main.SetOpen(false);
      AniControl('restore');
      //main.AddMenuItem(main.MenuItems.splice().concat(<Layout_item><MenuItem /></Layout_item>).concat(<Layout_item><Button_1 /></Layout_item>));
    }
    else {
      AniControl('mouse_up');
    }
  }

  return (

    <Draggable onStart={drag_start}
      onDrag={drag_ing}
      onStop={drag_stop}
      position={{ x: 0, y: 0 }}
    >
      <div>
        <ItemSpring state={ani_state}>
          {styles => (
            <div ref={boxRef} style={styles} onDrop={(e)=>{console.log(e)}}>
              {React.cloneElement(children)}
            </div>
          )}
        </ItemSpring>
      </div>
    </Draggable>
  )
}
export function MenuItem(style) {
  return (
    <Menu style={style}>
      <Menu.Item>Menu</Menu.Item>
      <Menu.SubMenu title="SubMenu">
        <Menu.Item>SubMenuItem</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
export function LoginItem(style) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      style={style}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export function ButtonItem(style) {
  return (
    <Layout style={style}>
      <Button type="primary">Primary</Button>
    </Layout>
  )
}
export function Layout_1({ item, style }) {

  if (item === true) {
    var item_header_style = {
      background: `${Header_Color}`, height: '40px'
    }

    var item_content_style = {
      background: `${Content_Color}`, height: '100px'
    }
  }
  return (
    <Layout style={style}>
      <Header style={item_header_style}>Header</Header>
      <Layout.Content style={item_content_style}>Content</Layout.Content>
      <Footer style={item_header_style}>Footer</Footer>
    </Layout>
  )
}
export function Layout_2({ item, style }) {
  if (item === true) {
    var item_header_style = {
      background: `${Header_Color}`, height: '40px'
    }

    var item_content_style = {
      background: `${Content_Color}`, height: '100px'
    }
    var sidebar_content_style = {
      background: `${Sidebar_Color}`,
      width: 50
    }
  }
  return (

    <Layout style={style}>
      <Header style={item_header_style} height={50}>Header</Header>
      <Layout>
        <Sider style={sidebar_content_style} width={sidebar_content_style && sidebar_content_style.width}>Sider</Sider>
        <Layout.Content style={item_content_style}>Content</Layout.Content>
      </Layout>
      <Footer style={item_header_style}>Footer</Footer>
    </Layout>

  )
}
export function Layout_3({ item, style }) {
  if (item === true) {
    var item_header_style = {
      background: `${Header_Color}`, height: '40px'
    }

    var item_content_style = {
      background: `${Content_Color}`, height: '100px'
    }
    var sidebar_content_style = {
      background: `${Sidebar_Color}`,
      width: 50
    }
  }
  return (

    <Layout style={style}>
      <Header style={item_header_style}>Header</Header>
      <Layout>
        <Layout.Content style={item_content_style}>Content</Layout.Content>
        <Sider style={sidebar_content_style} width={sidebar_content_style && sidebar_content_style.width}>Sider</Sider>
      </Layout>
      <Footer style={item_header_style}>Footer</Footer>
    </Layout>

  )
}


export function Layout_4({ item, style,sidebar }) {
  
  if (item === true) {
    var item_header_style = {
      background: `${Header_Color}`, height: '40px'
    }

    var item_content_style = {
      background: `${Content_Color}`, height: '100px'
    }
    var sidebar_content_style = {
      background: `${Sidebar_Color}`,
      width: 50
    }
  }
  return (

    <Layout style={style}>

      <Sider style={sidebar_content_style} width={sidebar_content_style && sidebar_content_style.width}>
      {sidebar && sidebar.map((v, i) =>
            (
              <div>
                {React.cloneElement(v)}
                </div>
            )
          )}
      </Sider>

      <Layout>
        <Header style={item_header_style}>
          Header
        </Header>
        <Layout.Content style={item_content_style}>
          Content
        </Layout.Content>
        <Footer style={item_header_style}>
          Footer
        </Footer>
      </Layout>
    </Layout>

  )
}