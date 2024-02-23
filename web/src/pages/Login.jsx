

import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        navigate('/home');
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ width: '100%' }}>
            <h2 style={{ textAlign: 'center', padding: '40px 10px' }}>IUMRS-ICEM2024
                Conference System
                <span style={{ display: 'block' }}>(For Staff)</span>
            </h2>

            <div style={{ width: '80%', margin: 'auto' }}>
                <Form
                    form={form}
                    name="basic"
                    style={{
                        display: 'block',
                        maxWidth: 600,
                        margin: 'auto'
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit" style={{
                            display: "block",
                            margin: "20px auto",
                            width: "100%",
                        }}
                            size="large"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default Login;