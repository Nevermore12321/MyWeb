/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: Step2.Information
 * @time: 2020/7/4 17:19
*/

import React from 'react';
import {
    Form, Input,
} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function Step2UserInfo() {
    const [ form ] = Form.useForm();

    const onhandleSubmitRegister = () => {
        console.log('test');
    }

    return (
        <Form
            { ...formItemLayout }
            name="register"
            form={ form }
            onFinish={ onhandleSubmitRegister }
            scrollToFirstError
        >
            <Form.Item
                name="userName"
                label="Username"
                rules={ [
                    {
                        pattern: /^[a-zA-Z0-9_-]{4,16}$/,
                        message: 'Please input a 4-16 characters username!',
                    },
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ] }
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={ [
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    {
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,10}$/,
                        message: 'Password must contain at least one uppercase letter, one lowercase letter and one number.',
                    },
                ] }
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={ [ 'password' ] }
                hasFeedback
                rules={ [
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ] }
            >
                <Input.Password />
            </Form.Item>

        </Form>
    )
}

export default Step2UserInfo;
