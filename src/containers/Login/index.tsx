import appConfig from "@/config/app"
import { useLogin } from "@/hooks/useAuth"
import { localStore } from "@/utils/LocalStore"
import { Button, Form, Input, notification } from "antd"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

type FieldType = {
    email?: string
    password?: string
}

export const Login = () => {
    const [loading, setLoading] = useState(false)
    const loginMutation = useLogin()

    const onFinish = (values: any) => {
        setLoading(true)
        loginMutation.mutate(values, {
            onSettled: () => {
                setLoading(false)
            },
        })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }

    return (
        <div className="m-auto max-w-[500px] mt-[200px]">
            <h1 className="text-center">Trang login</h1>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical">
                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Vui lòng nhập email" }]}>
                    <Input
                        size="large"
                        prefix={<i className="fa-solid fa-envelope"></i>}
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
                    className="mt-6">
                    <Input.Password
                        size="large"
                        prefix={<i className="fa-solid fa-lock"></i>}
                    />
                </Form.Item>

                <Form.Item className="text-center">
                    <Button
                        loading={loading}
                        type="primary"
                        htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
            <span>
                Bạn chưa có tài khoản? <Link to={"/register"}>Đăng ký</Link>
            </span>
        </div>
    )
}
