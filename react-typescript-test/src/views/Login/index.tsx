import React from 'react';
import { Form, Input, Button, message, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { useHistory } from 'react-router-dom'
// import axios from 'axios'
// import { useQuery } from 'react-query'

import { Container, LoginConent } from './styles';



const Login: React.FC = () => {

  // const history = useHistory()
  const onFinish = (values: any) => {
    // reqLogin('/user/login', values).then(res => {
    //   console.log(res);

    // })

  };

  return (
    <Container>
      <LoginConent>
        <h1>欢迎登陆</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入户名' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
              登录
         </Button>

          </Form.Item>
        </Form>
      </LoginConent>
    </Container>
  );
};

export default Login;