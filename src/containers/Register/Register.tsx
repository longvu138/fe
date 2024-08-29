import appConfig from "@/config/app"
import { useRegister } from "@/hooks/useAuth"
import { Button, Form, Input, notification } from "antd"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

type FieldType = {
    email?: string
    password?: string
    username?: string
}

export const Register = () => {
    const [loading, setLoading] = useState(false)
    const registerMutation = useRegister()
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        setLoading(true)
        registerMutation.mutate(values, {
            onSuccess: (data) => {
                notification.success({
                    message: "Thành Công",
                    description: "Đăng ký tài khoản thành công",
                    key: "success",
                    duration: 4,
                })
                navigate(`/verify?email=${data?.data?.email}`)
            },
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
            <h1 className="text-center">Đăng ký tài khoản</h1>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical">
                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: "email", message: "Vui lòng nhập email" }]}>
                    <Input
                        type="email"
                        size="large"
                        prefix={<i className="fa-solid fa-envelope"></i>}
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Vui lòng nhập username" }]}>
                    <Input
                        type="username"
                        size="large"
                        prefix={<i className="fa-solid fa-user"></i>}
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
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
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
            <span>
                Bạn đã có tài khoản? <Link to={"/login"}>Đăng nhập ngay</Link>
            </span>
        </div>
    )
}
